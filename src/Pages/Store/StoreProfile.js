import React, { useState, useEffect } from "react";
import { doc, getDoc, updateDoc, collection, onSnapshot } from "firebase/firestore";
import { db, storage } from "../../services/Firebase";

function StoreProfile() {
  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState(null);
  const accountId = window.sessionStorage.getItem("account_id");
  const docRef = doc(db, "stores", accountId);

  useEffect(() => {
    onSnapshot(docRef, (doc) => {
      setName(doc.data().item_name);
      setEmailAddress(doc.data().item_name);
      setUsername(doc.data().item_name);
      setContactNumber(doc.data().item_name);
      setAddress(doc.data().item_name);
      document.getElementById("previewImg").src=doc.data().item_imageUrl;
    })
  }, [])

  const handleSubmit1 = (e) => {
    e.preventDefault();
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
  };

  const handleSubmit3 = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="w-1/2 m-auto py-16 bg-regFormBg my-10">
        <h1 className="text-center text-xl mb-5">Edit Store Image</h1>
        <form onSubmit={handleSubmit3}>
          <div className="grid items-center justify-items-center w-full">
            <div>
              <div className="grid grid-cols-regForm gap-6 mt-5 w-full">
                <label className="text-right">Upload Image</label>
                <input type="file" className="w-full" />
              </div>
              <div className="mt-5 w-52 h-52 mx-auto">
                <img src="../images/sampleResto.jpg" id="previewImg" alt="sampleResto" className="object-cover w-full h-full" />
              </div>
              <div className="text-center mt-10">
                <button className="bg-blue-500 py-3 px-6 text-white">
                  Update
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      
      <div className="w-1/2 m-auto py-16 bg-regFormBg my-10">
        <h1 className="text-center text-xl mb-5">Edit Profile</h1>
        <form onSubmit={handleSubmit1}>
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
                <button className="bg-blue-500 py-3 px-6 text-white">
                  Update
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="w-1/2 m-auto py-16 bg-regFormBg my-10">
        <h1 className="text-center text-xl mb-5">Edit Password</h1>
        <form onSubmit={handleSubmit2}>
          <div className="grid items-center justify-items-center w-full">
            <div>
              <div className="grid grid-cols-regForm gap-6 mt-5 w-full">
                <label className="text-right">Current Password</label>
                <input type="text" className="w-full" />
              </div>
              <div className="grid grid-cols-regForm gap-6 mt-5">
                <label className="text-right">New Password</label>
                <input type="text" className="w-full" />
              </div>
              <div className="grid grid-cols-regForm gap-6 mt-5">
                <label className="text-right">Confirm Password</label>
                <input type="text" className="w-full" />
              </div>

              <div className="text-center mt-10">
                <button className="bg-blue-500 py-3 px-6 text-white">
                  Update
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default StoreProfile;
