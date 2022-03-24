import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../services/Firebase";
import ConfirmDialog from "../../helpers/ConfirmDialog";

function StoreNavbar(props) {
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState("");
  const [nickname, setNickname] = useState("");
  const [imageUrl, setImageUrl] = useState("../../images/defaultImage.png");
  const navigate = useNavigate();

  const logout = () => {
    window.sessionStorage.clear();
    navigate("/login", { replace: true });
  };

  const logoutClicked = () => {
    setModal(true);
    setMessage("Are you sure you want to logout?");
  }

  useEffect(() => {
    const accountId = window.sessionStorage.getItem("account_id");
    const docRef = doc(db, "stores", accountId);
    onSnapshot(docRef, (doc) => {
      setImageUrl(doc.data().imageUrl);
      setNickname(doc.data().name);
    });

  }, []);

  return (
    <div className="w-full bg-registrationHeader">
      <div>
        <nav className="container mx-auto flex justify-between py-5 store-navbar">
          <div className="text-gray-400 flex gap-4 items-center">
            <NavLink className="hover:text-gray-300" to="/marketplace">
              <img src={props.link} alt="taythrifts_logo" className="w-12" />
            </NavLink>
            <NavLink className="hover:text-gray-300" to="/dashboard">
              Dashboard
            </NavLink>
            <NavLink className="hover:text-gray-300" to={"/store/profile"}>
              Profile
            </NavLink>
            <NavLink
              className="hover:text-gray-300"
              to="/store/transactions"
            >
              Transactions
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
            <p className="hover:text-gray-300 cursor-pointer" onClick={logoutClicked}>
              Logout
            </p>
          </div>
        </nav>
      </div>
      {modal && (
        <ConfirmDialog
          setModal={setModal}
          message={message}
          deleteItem={logout}
        />
      )}
    </div>
  );
}

export default StoreNavbar;
