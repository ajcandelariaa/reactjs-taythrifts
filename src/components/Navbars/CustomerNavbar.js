import React from "react";
import { NavLink } from "react-router-dom";

function CustomerNavbar(props) {
  return (
    <div className="w-full bg-registrationHeader">
      <div>
        <nav className="container m-auto flex justify-between py-3 customer-navbar">
          <div className="text-white flex gap-4 items-center">
            <NavLink to="/marketplace">
              <img src={props.link} alt="taythrifts_logo" className="w-12" />
            </NavLink>
            <NavLink to="/marketplace">Marketplace</NavLink>
            <NavLink to="/customer/profile">Profile</NavLink>
            <NavLink to="/customer/transactions">Transactions</NavLink>
            <NavLink to="/customer/cart">
              <div className="flex items-center">
                <div>Cart</div>
                <div className="bg-red-400 w-6 h-6 rounded-full text-xs ml-1 grid grid-cols-1 justify-items-center items-center">5</div>
              </div>
            </NavLink>
          </div>
          <div className="flex gap-3 items-center text-white">
            <div className="flex gap-2 items-center">
              <img
                src="../images/sampleCust.jpg"
                alt="taythrifts_logo"
                className="w-7 h-7 object-cover rounded-full"
              />
              <p>Aj Candelaria</p>
            </div>
            <NavLink to="/login">Logout</NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default CustomerNavbar;
