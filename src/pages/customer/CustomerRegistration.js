import React, { useState } from "react";
import { db, storage } from "../../services/Firebase";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { toastSuccess, toastError } from '../../helpers/Toaster';
import ConfirmDialog from "../../helpers/ConfirmDialog";

function CustomerRegistration() {
  const [firstname, setFirstname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [lastname, setLastname] = useState("");
  const [nickname, setNickname] = useState("");
  const [address, setAddress] = useState("");
  const [birthday, setBirthday] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [age, setAge] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
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
  }

  const handleSubmit2 = () => {
    setModal(false);
    setLoader(true);
    if(validation()){
      const customersCollectionRef = collection(db, "customers");
      const path = `customers/${Date.now()}${image.name}`;
      const storageRef = ref(storage, path);
      const uploadImage = uploadBytesResumable(storageRef, image);
      uploadImage.on("state_changed", (snapshot) => {
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          console.log(progress);
        }, (error) => {
          toastError("Error Submitting Form1");
          setLoader(false);
          console.log(error.message);
        }, () => {
          getDownloadURL(uploadImage.snapshot.ref)
          .then((url) => {
            addDoc(customersCollectionRef, {
              firstname: firstname,
              middlename: middlename,
              lastname: lastname,
              nickname: nickname,
              address: address,
              birthday: birthday,
              emailAddress: emailAddress,
              contactNumber: contactNumber,
              age: age,
              username: username,
              password: password,
              gender: gender,
              imageUrl: url,
              imagePath: path,
              verified: false,
            }).then(() => {
              toastSuccess("Registered Successfully!");
              setLoader(false);
              setFirstname("");
              setMiddlename("");
              setLastname("");
              setNickname("");
              setAddress("");
              setBirthday("");
              setEmailAddress("");
              setContactNumber("");
              setAge("");
              setUsername("");
              setPassword("");
              setConfirmPassword("");
              setGender("");
              document.getElementById("previewImg").src='../images/defaultImage.png';
              setImage(null);
            }).catch((err) => {
              toastError("Error Submitting Form2");
              setLoader(false);
              console.log(err.message);
            })
          })
        }
      );
    } else {
      toastError("Error Submitting Form3");
      setLoader(false);
    }
  }

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
              Customer Register Form
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-x-10 pr-10 pl-5">
              <div className="grid grid-cols-regForm gap-6 items-center mt-5 w-full">
                <label className="text-right">First Name <span className="text-red-600">*</span></label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md h-9 px-3 outline-loginForm text-sm text-gray-700"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                />
              </div>
              <div className="grid grid-cols-regForm gap-6 items-center mt-5 w-full">
                <label className="text-right">Middle Name </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md h-9 px-3 outline-loginForm text-sm text-gray-700"
                  value={middlename}
                  onChange={(e) => setMiddlename(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-regForm gap-6 items-center mt-5 w-full">
                <label className="text-right">Last Name <span className="text-red-600">*</span></label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md h-9 px-3 outline-loginForm text-sm text-gray-700"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  required
                />
              </div>
              <div className="grid grid-cols-regForm gap-6 items-center mt-5 w-full">
                <label className="text-right">Nickname <span className="text-red-600">*</span></label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md h-9 px-3 outline-loginForm text-sm text-gray-700"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  required
                />
              </div>
              <div className="grid grid-cols-regForm gap-6 items-center mt-5">
                <label className="text-right">Address <span className="text-red-600">*</span></label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md h-9 px-3 outline-loginForm text-sm text-gray-700"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <div className="grid grid-cols-regForm gap-6 items-center mt-5 w-full">
                <label className="text-right">Birthday <span className="text-red-600">*</span></label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-md h-9 px-3 outline-loginForm text-sm text-gray-700"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
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
              <div className="grid grid-cols-regForm gap-6 items-center mt-5 w-full">
                <label className="text-right">Age <span className="text-red-600">*</span></label>
                <input
                  type="number"
                  min="5"
                  max="100"
                  className="w-full border border-gray-300 rounded-md h-9 px-3 outline-loginForm text-sm text-gray-700"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
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
                <label className="text-right">Gender <span className="text-red-600">*</span></label>
                <div className="w-full h-9 px-3 border rounded-md text-sm text-gray-700 flex items-center justify-items-center gap-10">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      className="cursor-pointer"
                      name="gender"
                      checked={gender === "Male"}
                      onChange={() => setGender("Male")}
                      required
                    />
                    Male
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      className="cursor-pointer"
                      name="gender"
                      checked={gender === "Female"}
                      onChange={() => setGender("Female")}
                    />
                    Female
                  </div>
                </div>
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

export default CustomerRegistration;
