import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { doc, onSnapshot, collection, query, where } from "firebase/firestore";
import { db } from "../../services/Firebase";

function CustomerNavbar(props) {
  const [nickname, setNickname] = useState("");
  const [imageUrl, setImageUrl] = useState("../../images/defaultImage.png");
  const [cart, setCart] = useState(0);
  const navigate = useNavigate();
  const accountId = window.sessionStorage.getItem("account_id");
  const docRef = doc(db, "customers", accountId);

  const logout = () => {
    window.sessionStorage.clear();
    navigate("/login", { replace: true });
  };

  useEffect(() => {
    onSnapshot(docRef, (doc) => {
      setImageUrl(doc.data().imageUrl);
      setNickname(doc.data().nickname);
    });

    const q = query(collection(db, "carts"), where("customer_id", "==", accountId), where("checkout", "==", false));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let countCart = 0;
      querySnapshot.forEach((doc) => {
        countCart += doc.data().item_quantity;
      });
      setCart(countCart);
    });

    return () => unsub();
  }, []);

  return (
    <div className="w-full bg-registrationHeader">
      <div>
        <nav className="mx-10 flex justify-between py-5 customer-navbar">
          <div className="text-gray-400 flex gap-4 items-center">
            <NavLink className="hover:text-gray-300" to="/marketplace">
              <img src={props.link} alt="taythrifts_logo" className="w-12" />
            </NavLink>
            <NavLink className="hover:text-gray-300" to="/marketplace">
              Marketplace
            </NavLink>
            <NavLink className="hover:text-gray-300" to="/customer/profile">
              Profile
            </NavLink>
            <NavLink
              className="hover:text-gray-300"
              to="/customer/transactions"
            >
              Transactions
            </NavLink>
            <NavLink className="hover:text-gray-300" to="/customer/cart">
              <div className="flex items-center">
                <div>Cart</div>
                <div className="bg-circleCartBg w-6 h-6 rounded-full text-xs ml-1 grid grid-cols-1 justify-items-center items-center">
                  {cart}
                </div>
              </div>
            </NavLink>
          </div>
          <div className="flex gap-3 items-center text-gray-400">
            <div className="flex gap-2 items-center">
              <img
                src={imageUrl}
                alt="taythrifts_logo"
                className="w-7 h-7 object-cover rounded-full"
              />
              <p>{nickname}</p>
            </div>
            <p className="hover:text-gray-300 cursor-pointer" onClick={logout}>
              Logout
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default CustomerNavbar;
