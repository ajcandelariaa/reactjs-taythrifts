import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/Firebase";

function CustomerNavbar(props) {
  const [nickname, setNickname] = useState("");
  const [imageUrl, setImageUrl] = useState("../../images/defaultImage.png");
  const [cart, setCart] = useState(0);
  const navigate = useNavigate();
  const accountId = window.sessionStorage.getItem("account_id");

  const logout = () => {
    window.sessionStorage.clear();
    navigate("/login", { replace: true });
  };

  useEffect(() => {
    const customerCollection = collection(db, "customers");
    const cartCollection = collection(db, "carts");
    const queryCartCollection = query(
      cartCollection,
      where("customer_id", "==", accountId),
      where("checkout", "==", false)
    );

    const getAccountInfo = async () => {
      const customerData = await getDocs(customerCollection);
      const cartData = await getDocs(queryCartCollection);

      const accountInfo = customerData.docs
        .filter((doc) => doc.id === accountId)
        .map((doc2) => ({
          nickname: doc2.data().nickname,
          imageUrl: doc2.data().imageUrl,
        }));

      setImageUrl(accountInfo[0].imageUrl);
      setNickname(accountInfo[0].nickname);

      setCart(
        cartData.docs.reduce((acc, curr) => {
          acc += curr.data().item_quantity;
          return acc;
        }, 0)
      );
    };

    getAccountInfo();
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
