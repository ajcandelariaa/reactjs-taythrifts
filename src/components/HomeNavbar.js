import React from "react";
import { Link } from "react-router-dom";

function HomeNavbar() {
  return (
    <div className="fixed w-full">
      <div>
        <nav className="container m-auto flex justify-between py-7">
          <div className="text-white flex gap-10 items-center">
            <Link className="text-xl" to="/">TayThrifts</Link>
            <Link to="/">Trends</Link>
            <Link to="/">Highlight</Link>
            <Link to="/">Features</Link>
            <Link to="/">Testimonals</Link>
            <Link to="/">Team</Link>
          </div>
          <div className="flex gap-3 items-center text-white">
            <Link className="border py-1 px-8 rounded-lg" to="/login">Login</Link>
            <Link className="border py-1 px-8 rounded-lg" to="/signup">Signup</Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default HomeNavbar;
