import React from "react";
import RegistrationNavbar from "../components/Navbars/RegistrationNavbar";

function CustomerRegistration() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <RegistrationNavbar link="../images/taythrifts_logo.png" />
      <div className="w-1/2 m-auto py-16 bg-regFormBg my-10">
        <h1 className="text-center text-xl mb-5">Customer Register Form</h1>
        <form onClick={handleSubmit}>
          <div className="grid items-center justify-items-center w-full">
            <div>
              <div className="grid grid-cols-regForm gap-6 mt-5 w-full">
                <label className="text-right">First Name</label>
                <input type="text" className="w-full" />
              </div>
              <div className="grid grid-cols-regForm gap-6 mt-5">
                <label className="text-right">Middle Name</label>
                <input type="text" className="w-full" />
              </div>
              <div className="grid grid-cols-regForm gap-6 mt-5">
                <label className="text-right">Last Name</label>
                <input type="text" className="w-full" />
              </div>
              <div className="grid grid-cols-regForm gap-6 mt-5">
                <label className="text-right">Nickname</label>
                <input type="text" className="w-full" />
              </div>
              <div className="grid grid-cols-regForm gap-6 mt-5">
                <label className="text-right">Email</label>
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
                <label className="text-right">Birthday</label>
                <input type="text" className="w-full" />
              </div>

              <div className="grid grid-cols-regForm gap-6 mt-5">
                <label className="text-right">Age</label>
                <input type="text" className="w-full" />
              </div>

              <div className="grid grid-cols-regForm gap-6 mt-5">
                <label className="text-right">Gender</label>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <input type="radio" name="age" id="" /> Male
                  </div>
                  <div>
                    <input type="radio" name="age" id="" /> Female
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-regForm gap-6 mt-5">
                <label className="text-right">Contact Number</label>
                <input type="text" className="w-full" />
              </div>

              <div className="grid grid-cols-regForm gap-6 mt-5">
                <label className="text-right">Address</label>
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

export default CustomerRegistration;
