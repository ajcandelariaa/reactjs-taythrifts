import React from "react";
import RegistrationNavbar from "../components/RegistrationNavbar";

function StoreRegistration() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <RegistrationNavbar link="../images/taythrifts_logo.png" />
      <div className="w-1/2 m-auto py-16 bg-regFormBg my-10">
        <h1 className="text-center text-xl mb-5">Store Register Form</h1>
        <form onClick={handleSubmit}>
          <div className="grid items-center justify-items-center w-full">
            <div>
              <div className="grid grid-cols-regForm gap-6 mt-5 w-full">
                <label className="text-right">Store Name</label>
                <input type="text" className="w-full" />
              </div>
              <div className="grid grid-cols-regForm gap-6 mt-5">
                <label className="text-right">Email Address</label>
                <input type="text" className="w-full" />
              </div>
              <div className="grid grid-cols-regForm gap-6 mt-5">
                <label className="text-right">Username</label>
                <input type="text" className="w-full" />
              </div>
              <div className="grid grid-cols-regForm gap-6 mt-5">
                <label className="text-right">Password</label>
                <input type="text" className="w-full" />
              </div>
              <div className="grid grid-cols-regForm gap-6 mt-5">
                <label className="text-right">Confirm Password</label>
                <input type="text" className="w-full" />
              </div>

              <div className="grid grid-cols-regForm gap-6 mt-5">
                <label className="text-right">Contact Number</label>
                <input type="text" className="w-full" />
              </div>

              <div className="grid grid-cols-regForm gap-6 mt-5">
                <label className="text-right">Store Address</label>
                <input type="text" className="w-full" />
              </div>

              <div className="text-center mt-10">
                <button className="bg-blue-500 py-3 px-6 text-white">
                  Register
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default StoreRegistration;
