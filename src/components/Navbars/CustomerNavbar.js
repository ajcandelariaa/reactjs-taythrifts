import React from "react";
import { Link } from "react-router-dom";

function CustomerNavbar(props) {
  return (
    <div className="w-full bg-registrationHeader">
      <div>
        <nav className="container m-auto flex justify-between py-3">
          <div className="text-white flex gap-4 items-center">
            <Link to="/marketplace">
              <img src={props.link} alt="taythrifts_logo" className="w-12" />
            </Link>
            <Link to="/marketplace">Marketplace</Link>
            <Link to="/customer/profile">Profile</Link>
            <Link to="/customer/transactions">Transactions</Link>
            <Link to="/customer/cart">
              <div className="flex items-center">
                <div>Cart</div>
                <div className="bg-red-400 w-6 h-6 rounded-full text-xs ml-2 grid grid-cols-1 justify-items-center items-center">5</div>
              </div>
            </Link>
          </div>
          <div className="flex gap-3 items-center text-white">
            <div className="flex gap-2 items-center">
              <img
                src={props.link}
                alt="taythrifts_logo"
                className="w-7 rounded-full"
              />
              <p>Aj Candelaria</p>
            </div>
            <Link to="/login">Logout</Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default CustomerNavbar;
