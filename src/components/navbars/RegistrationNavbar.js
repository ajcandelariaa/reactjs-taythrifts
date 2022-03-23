import React from "react";
import { NavLink } from "react-router-dom";

function RegistrationNavbar(props) {
  return (
    <div className="w-full bg-registrationHeader registration-navbar">
      <div>
        <nav className="container m-auto flex justify-between py-3">
          <div className="text-gray-400 flex gap-4 items-center">
            <NavLink className="hover:text-gray-300" to="/">
              <img src={props.link} alt="taythrifts_logo" className="w-12" />
            </NavLink>
            <NavLink className="hover:text-gray-300" to="/">Home</NavLink>
            <NavLink className="hover:text-gray-300" to="/signup">Registration</NavLink>
            <NavLink className="hover:text-gray-300" to="/login">Login</NavLink>
          </div>
          <div className="flex gap-3 items-center text-gray-400">
            <NavLink className="hover:text-gray-300" to="/signup-customer">Customer Registration</NavLink>
            <NavLink className="hover:text-gray-300" to="/signup-store">Store Registration</NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default RegistrationNavbar;
