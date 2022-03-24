import React, { useState } from "react";
import { doc } from "firebase/firestore";
import { db } from "../../services/Firebase";
import EditStoreImage from "../../components/store/EditStoreImage";
import EditStoreInfo from "../../components/store/EditStoreInfo";
import EditStorePassword from "../../components/store/EditStorePassword";
import StoreInfo from "../../components/store/StoreInfo";

function StoreProfile() {
  const [show, setShow] = useState("Account");
  const accountId = window.sessionStorage.getItem("account_id");
  const docRef = doc(db, "stores", accountId);

  return (
    <div>
      
      <div className="grid grid-cols-profileGrid gap-x-5 w-4/5 mx-auto my-10 items-start">
        <div>
          <button
            className={
              "w-full py-3 mt-1 border border-gray-300 " +
              (show === "Account"
                ? "bg-sideBarMarketplaceButtonsActive text-gray-300"
                : "hover:bg-sideBarMarketplaceButtonsHover hover:text-gray-200 bg-white text-black")
            }
            onClick={() => setShow("Account")}
          >
            Account
          </button>
          <button
            className={
              "w-full py-3 mt-1 border border-gray-300 " +
              (show === "EditInfo"
                ? "bg-sideBarMarketplaceButtonsActive text-gray-300"
                : "hover:bg-sideBarMarketplaceButtonsHover hover:text-gray-200 bg-white text-black")
            }
            onClick={() => setShow("EditInfo")}
          >
            Edit Info
          </button>
          <button
            className={
              "w-full py-3 mt-1 border border-gray-300 " +
              (show === "EditImage"
                ? "bg-sideBarMarketplaceButtonsActive text-gray-300"
                : "hover:bg-sideBarMarketplaceButtonsHover hover:text-gray-200 bg-white text-black")
            }
            onClick={() => setShow("EditImage")}
          >
            Update Image
          </button>
          <button
            className={
              "w-full py-3 mt-1 border border-gray-300 " +
              (show === "EditPassword"
                ? "bg-sideBarMarketplaceButtonsActive text-gray-300"
                : "hover:bg-sideBarMarketplaceButtonsHover hover:text-gray-200 bg-white text-black")
            }
            onClick={() => setShow("EditPassword")}
          >
            Reset Password
          </button>
        </div>
        <div className="w-full py-10 bg-regFormBg ">
          {show === "Account" ? (
            <StoreInfo docRef={docRef} />
          ) : show === "EditInfo" ? (
            <EditStoreInfo docRef={docRef} />
          ) : show === "EditImage" ? (
            <EditStoreImage docRef={docRef} />
          ) : (
            <EditStorePassword docRef={docRef} />
          )}
        </div>
      </div>
    </div>
  );
}

export default StoreProfile;
