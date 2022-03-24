import React, { useState, useEffect } from "react";
import { onSnapshot, updateDoc } from "firebase/firestore";
import { toastSuccess, toastError } from "../../helpers/Toaster";

function EditCustomerInfo({ docRef }) {
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
  const [gender, setGender] = useState("");
  const [infoLoader, setInfoLoader] = useState(false);

  useEffect(() => {
    onSnapshot(docRef, (doc) => {
      setFirstname(doc.data().firstname);
      setMiddlename(doc.data().middlename);
      setLastname(doc.data().lastname);
      setNickname(doc.data().nickname);
      setAddress(doc.data().address);
      setBirthday(doc.data().birthday);
      setEmailAddress(doc.data().emailAddress);
      setContactNumber(doc.data().contactNumber);
      setAge(doc.data().age);
      setUsername(doc.data().username);
      setGender(doc.data().gender);
    });
  }, []);

  const updateInfo = async () => {
    await updateDoc(docRef, {
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
      gender: gender,
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
    <div>
      <div className="flex justify-center mb-5">
        <p className="text-xl uppercase border border-sideBarMarketplaceButtonsActive w-fit py-2 px-10">
        Edit Info
        </p>
      </div>
      <form onSubmit={handleInfoForm}>
        <div className="pl-5 pr-16">
          <div className="grid grid-cols-2 gap-x-5">
            <div className="grid grid-cols-regForm gap-6 items-center mt-5 w-full">
              <label className="text-right">First Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md h-9 px-3 outline-loginForm text-sm text-gray-700"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-regForm gap-6 items-center mt-5 w-full">
              <label className="text-right">Middle Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md h-9 px-3 outline-loginForm text-sm text-gray-700"
                value={middlename}
                onChange={(e) => setMiddlename(e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-regForm gap-6 items-center mt-5 w-full">
              <label className="text-right">Last Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md h-9 px-3 outline-loginForm text-sm text-gray-700"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-regForm gap-6 items-center mt-5 w-full">
              <label className="text-right">Nickname</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md h-9 px-3 outline-loginForm text-sm text-gray-700"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-regForm gap-6 items-center mt-5">
              <label className="text-right">Address</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md h-9 px-3 outline-loginForm text-sm text-gray-700"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-regForm gap-6 items-center mt-5 w-full">
              <label className="text-right">Birthday</label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-md h-9 px-3 outline-loginForm text-sm text-gray-700"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
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
            <div className="grid grid-cols-regForm gap-6 items-center mt-5 w-full">
              <label className="text-right">Age</label>
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
              <label className="text-right">Username</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md h-9 px-3 outline-loginForm text-sm text-gray-700"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-regForm gap-6 items-center mt-5">
              <label className="text-right">Gender</label>
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
      </form>
    </div>
  );
}

export default EditCustomerInfo;
