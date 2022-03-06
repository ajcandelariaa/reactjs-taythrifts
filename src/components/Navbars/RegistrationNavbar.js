import React from "react";
import { Link } from "react-router-dom";

function RegistrationNavbar(props) {
  return (
    <div className="w-full bg-registrationHeader">
      <div>
        <nav className="container m-auto flex justify-between py-3">
          <div className="text-white flex gap-4 items-center">
            <Link to="/">
              <img src={props.link} alt="taythrifts_logo" className="w-12" />
            </Link>
            <Link to="/">Home</Link>
            <Link to="/signup">Registration</Link>
            <Link to="/login">Login</Link>
          </div>
          <div className="flex gap-3 items-center text-white">
            <Link to="/signup/customer">Customer Registration</Link>
            <Link to="/signup/store">Store Registration</Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default RegistrationNavbar;
