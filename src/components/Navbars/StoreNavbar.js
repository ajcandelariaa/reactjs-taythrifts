import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function StoreNavbar(props) {
  const navigate = useNavigate();

  const logout = () => {
    window.sessionStorage.clear();
    navigate("/login", { replace: true });
  }

  return (
    <div className="w-full bg-registrationHeader">
      <div>
        <nav className="container m-auto flex justify-between py-3">
          <div className="text-white flex gap-4 items-center">
            <NavLink to="/marketplace">
              <img src={props.link} alt="taythrifts_logo" className="w-12" />
            </NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/store/profile">Profile</NavLink>
            <NavLink to="/store/transactions">Transactions</NavLink>
          </div>
          <div className="flex gap-3 items-center text-white">
            <div className="flex gap-2 items-center">
                <img src="../images/sampleResto.jpg" alt="taythrifts_logo" className="w-7 h-7 object-cover rounded-full" />
                <p>Forever 21</p>
            </div>
            <p className="hover:text-gray-300 cursor-pointer" onClick={logout}>Logout</p>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default StoreNavbar;
