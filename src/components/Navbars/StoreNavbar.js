import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

function StoreNavbar(props) {
  const [nickname, setNickname] = useState("");
  const [imageUrl, setImageUrl] = useState("../../images/defaultImage.png");
  const navigate = useNavigate();
  const accountId = window.sessionStorage.getItem("account_id");

  const logout = () => {
    window.sessionStorage.clear();
    navigate("/login", { replace: true });
  };

  useEffect(() => {
    const storeCollection = collection(db, "stores");
    const getAccountInfo = async () => {
      const storeData = await getDocs(storeCollection);

      const accountInfo = storeData.docs
        .filter((doc) => doc.id === accountId)
        .map((doc2) => ({
          nickname: doc2.data().name,
          imageUrl: doc2.data().imageUrl,
        }));

      setImageUrl(accountInfo[0].imageUrl);
      setNickname(accountInfo[0].nickname);
    };

    getAccountInfo();
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
            <NavLink className="hover:text-gray-300" to="/store/profile">
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
            <p className="hover:text-gray-300 cursor-pointer" onClick={logout}>
              Logout
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default StoreNavbar;
