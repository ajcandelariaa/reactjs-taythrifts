import React, { useState, useEffect } from "react";
import { onSnapshot, updateDoc } from "firebase/firestore";
import { toastSuccess, toastError } from "../../helpers/Toaster";

function EditCustomerPassword({ docRef }) {
    const [password, setPassword] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordLoader, setPasswordLoader] = useState(false);
  
    useEffect(() => {
      onSnapshot(docRef, (doc) => {
          setPassword(doc.data().password);
      });
    }, []);
  
    const updatePassword = async () => {
      await updateDoc(docRef, {
        password: newPassword,
      }).then(() => {
        toastSuccess("Password Updated!");
        setPasswordLoader(false);
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
      });
    };
  
    const handlePasswordForm = (e) => {
      setPasswordLoader(true);
      e.preventDefault();
      updatePassword();
    };
  return (
    <div>
    <div className="flex justify-center mb-5">
      <p className="text-xl uppercase border border-sideBarMarketplaceButtonsActive w-fit py-2 px-10">
      Reset Password
      </p>
    </div>
      <form onSubmit={handlePasswordForm}>
        <div className="grid items-center justify-items-center w-full px-10">
          <div>
            <div className="grid grid-cols-regForm gap-6 items-center mt-5">
              <label className="text-right">Old Password</label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded-md h-9 px-3 outline-loginForm text-sm text-gray-700"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-regForm gap-6 items-center mt-5">
              <label className="text-right">New Password</label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded-md h-9 px-3 outline-loginForm text-sm text-gray-700"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>

            <div className="grid grid-cols-regForm gap-6 items-center mt-5">
              <label className="text-right">Confirm Password</label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded-md h-9 px-3 outline-loginForm text-sm text-gray-700"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <div className="text-center mt-10">
              {passwordLoader === true ? (
                <>
                  <button
                    className="bg-gray-300 py-2 px-24 rounded-md text-black cursor-wait"
                    disabled
                  >
                    Updating...
                  </button>
                </>
              ) : (
                <>
                  <button className="bg-sideBarMarketplaceButtonsActive hover:bg-sideBarMarketplaceButtons py-2 px-24 rounded-md text-white">
                    Update
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default EditCustomerPassword