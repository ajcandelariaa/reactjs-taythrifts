import React, { useEffect, useState } from "react";
import { onSnapshot } from "firebase/firestore";

function CustomerInfo({ docRef }) {
  const [accountInfo, setAccountInfo] = useState({});

  useEffect(() => {
    onSnapshot(docRef, (doc) => {
      setAccountInfo({ ...doc.data() });
    });
  }, []);
  return (
    <div>
      <div className="flex justify-center mb-5">
        <p className="text-xl uppercase border border-sideBarMarketplaceButtonsActive w-fit py-2 px-10">
          Account
        </p>
      </div>

      <div className="grid grid-cols-accountGrid gap-10 w-4/6 mx-auto ">
        <div className="border-r-2 border-r-gray-300">
          <div className="mt-5 w-64 h-6w-64 mb-3">
            <img
              src={accountInfo.imageUrl}
              id="previewImg"
              alt="sampleResto"
              className="object-cover w-full h-full"
            />
          </div>
          <p className="text-sm">Username: {accountInfo.username}</p>
          <p className="text-sm">Email: {accountInfo.emailAddress}</p>
          <p className="text-sm">Contact Number: {accountInfo.contactNumber}</p>
        </div>

        <div className="mt-5">
          <p>Firstname: {accountInfo.firstname}</p>
          <div className="w-full bg-gray-200 h-0.5 my-1"></div>
          <p>Middlname: {accountInfo.middlename}</p>
          <div className="w-full bg-gray-200 h-0.5 my-1"></div>
          <p>Lastname: {accountInfo.lastname}</p>
          <div className="w-full bg-gray-200 h-0.5 my-1"></div>
          <p>Nickname: {accountInfo.nickname}</p>
          <div className="w-full bg-gray-200 h-0.5 my-1"></div>
          <p>Address: {accountInfo.address}</p>
          <div className="w-full bg-gray-200 h-0.5 my-1"></div>
          <p>Birthday: {accountInfo.nickname}</p>
          <div className="w-full bg-gray-200 h-0.5 my-1"></div>
          <p>Age: {accountInfo.age} years old</p>
          <div className="w-full bg-gray-200 h-0.5 my-1"></div>
          <p>Gender: {accountInfo.gender}</p>
        </div>
      </div>
    </div>
  );
}

export default CustomerInfo;
