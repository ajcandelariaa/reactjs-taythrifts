import React from "react";
import { Link } from "react-router-dom";

function StoreNavbar(props) {
  return (
    <div className="w-full bg-registrationHeader">
      <div>
        <nav className="container m-auto flex justify-between py-3">
          <div className="text-white flex gap-4 items-center">
            <Link to="/marketplace">
              <img src={props.link} alt="taythrifts_logo" className="w-12" />
            </Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/store/profile">Profile</Link>
            <Link to="/store/transactions">Transactions</Link>
          </div>
          <div className="flex gap-3 items-center text-white">
            <div className="flex gap-2 items-center">
                <img src="../images/sampleResto.jpg" alt="taythrifts_logo" className="w-7 h-7 object-cover rounded-full" />
                <p>Forever 21</p>
            </div>
            <Link to="/login">Logout</Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default StoreNavbar;
