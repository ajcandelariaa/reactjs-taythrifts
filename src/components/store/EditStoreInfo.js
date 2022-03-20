import React, { useState, useEffect } from "react";
import { onSnapshot, updateDoc } from "firebase/firestore";
import { toastSuccess, toastError } from "../../helpers/Toaster";

function EditStoreInfo({ docRef }) {
  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [username, setUsername] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [infoLoader, setInfoLoader] = useState(false);

  useEffect(() => {
    onSnapshot(docRef, (doc) => {
      setName(doc.data().name);
      setEmailAddress(doc.data().emailAddress);
      setUsername(doc.data().username);
      setContactNumber(doc.data().contactNumber);
      setAddress(doc.data().address);
    });
  }, []);

  const updateInfo = async () => {
    await updateDoc(docRef, {
      name: name,
      emailAddress: emailAddress,
      username: username,
      contactNumber: contactNumber,
      address: address,
    }).then(() => {
      toastSuccess("Info Updated!");
      setInfoLoader(false);
    });
  };

  const handleInfoForm = (e) => {
    setInfoLoader(true);
    e.preventDefault();
    updateInfo();
  };

  return (
    <div className="w-1/2 m-auto py-16 bg-regFormBg my-10">
      <h1 className="text-center text-xl mb-5">Edit Profile</h1>
      <form onSubmit={handleInfoForm}>
        <div className="grid items-center justify-items-center w-full">
          <div>
            <div className="grid grid-cols-regForm gap-6 items-center mt-5 w-full">
              <label className="text-right">Store Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md h-9 px-3 outline-loginForm text-sm text-gray-700"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-regForm gap-6 items-center mt-5">
              <label className="text-right">Store Address</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md h-9 px-3 outline-loginForm text-sm text-gray-700"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-regForm gap-6 items-center mt-5">
              <label className="text-right">Email Address</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md h-9 px-3 outline-loginForm text-sm text-gray-700"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-regForm gap-6 items-center mt-5">
              <label className="text-right">Contact Number</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md h-9 px-3 outline-loginForm text-sm text-gray-700"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-regForm gap-6 items-center mt-5">
              <label className="text-right">Username</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md h-9 px-3 outline-loginForm text-sm text-gray-700"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="text-center mt-10">
              {infoLoader === true ? (
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
  );
}

export default EditStoreInfo;
