import React, { useState } from "react";
import { db, storage } from "../../services/Firebase";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { toastSuccess, toastError } from "../../helpers/Toaster";
import ConfirmDialog from "../../helpers/ConfirmDialog";

function StoreRegistration() {
  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");
  const [loader, setLoader] = useState(false);
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState("");


  const chooseImage = (e) => {
    var reader = new FileReader();
    var file = e.target.files[0];
    if (file) {
      setImage(file);

      reader.onload = function () {
        document.getElementById("previewImg").src = reader.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const validation = () => {
    return true;
  };

  const handleSubmit2 = () => {
    setModal(false);
    setLoader(true);

    if (validation()) {
      const storesCollectionRef = collection(db, "stores");
      const path = `stores/${Date.now()}${image.name}`;
      const storageRef = ref(storage, path);
      const uploadImage = uploadBytesResumable(storageRef, image);
      uploadImage.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          console.log(progress);
        },
        (error) => {
          toastError("Error Submitting Form1");
          setLoader(false);
          console.log(error.message);
        },
        () => {
          getDownloadURL(uploadImage.snapshot.ref).then((url) => {
            addDoc(storesCollectionRef, {
              name: name,
              emailAddress: emailAddress,
              username: username,
              password: password,
              contactNumber: contactNumber,
              address: address,
              imageUrl: url,
              imagePath: path,
              verified: false,
            })
              .then(() => {
                toastSuccess("Registered Successfully!");
                setLoader(false);
                setName("");
                setEmailAddress("");
                setUsername("");
                setPassword("");
                setConfirmPassword("");
                setContactNumber("");
                setAddress("");
                document.getElementById("previewImg").src =
                  "../images/defaultImage.png";
                setImage(null);
              })
              .catch((err) => {
                toastError("Error Submitting Form2");
                setLoader(false);
                console.log(err.message);
              });
          });
        }
      );
    } else {
      toastError("Error Submitting Form3");
      setLoader(false);
    }
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    setModal(true);
    setMessage("Are you sure you want to register?");
  };

  return (
    <div>
      <div className="min-h-screen max-h-full py-10">
        <div className="w-2/3 mx-auto py-12 bg-regFormBg rounded-xl shadow-sm">
          <div className="flex justify-center mb-5 ">
            <p className="text-xl uppercase border border-sideBarMarketplaceButtonsActive w-fit py-2 px-10">
              Store Register Form
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-x-10 pr-10 pl-5">
              <div className="grid grid-cols-regForm gap-6 items-center mt-5 w-full">
                <label className="text-right">Store Name <span className="text-red-600">*</span></label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md h-9 px-3 outline-loginForm text-sm text-gray-700"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="grid grid-cols-regForm gap-6 items-center mt-5">
                <label className="text-right">Store Address <span className="text-red-600">*</span></label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md h-9 px-3 outline-loginForm text-sm text-gray-700"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <div className="grid grid-cols-regForm gap-6 items-center mt-5">
                <label className="text-right">Email Address <span className="text-red-600">*</span></label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md h-9 px-3 outline-loginForm text-sm text-gray-700"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  required
                />
              </div>
              <div className="grid grid-cols-regForm gap-6 items-center mt-5">
                <label className="text-right">Contact Number <span className="text-red-600">*</span></label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md h-9 px-3 outline-loginForm text-sm text-gray-700"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  required
                />
              </div>
              <div className="grid grid-cols-regForm gap-6 items-center mt-5">
                <label className="text-right">Username <span className="text-red-600">*</span></label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md h-9 px-3 outline-loginForm text-sm text-gray-700"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="grid grid-cols-regForm gap-6 items-center mt-5">
                <label className="text-right">Password <span className="text-red-600">*</span></label>
                <input
                  type="password"
                  className="w-full border border-gray-300 rounded-md h-9 px-3 outline-loginForm text-sm text-gray-700"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-regForm gap-6 items-center mt-5">
                <label className="text-right">Confirm Password <span className="text-red-600">*</span></label>
                <input
                  type="password"
                  className="w-full border border-gray-300 rounded-md h-9 px-3 outline-loginForm text-sm text-gray-700"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-regForm gap-6 items-center mt-5">
                <label className="text-right">Profile Image <span className="text-red-600">*</span></label>
                <input
                  type="file"
                  className="w-full border pt-1 border-gray-300 rounded-md h-9 px-3 outline-loginForm text-sm text-gray-700"
                  accept="image/*"
                  onChange={chooseImage}
                  required
                />
              </div>
            </div>

            <div className="flex justify-center mt-10">
              <img
                src="../images/defaultImage.png"
                id="previewImg"
                alt="defaultImage"
                className="w-52 h-52 object-cover rounded-full shadow-md"
              />
            </div>

            <div className="text-center mt-10">
              {loader === true ? (
                <>
                  <button
                    className="bg-gray-300 py-2 px-24 rounded-md text-black cursor-wait"
                    disabled
                  >
                    Submitting...
                  </button>
                </>
              ) : (
                <>
                  <button className="bg-sideBarMarketplaceButtonsActive hover:bg-sideBarMarketplaceButtons py-2 px-24 rounded-md text-white">
                    Register
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
      {modal && (
        <ConfirmDialog
          setModal={setModal}
          message={message}
          deleteItem={handleSubmit2}
        />
      )}
    </div>
  );
}

export default StoreRegistration;
