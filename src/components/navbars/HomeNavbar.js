import React from "react";
import { Link } from "react-router-dom";

function HomeNavbar() {
  return (
    <div className="fixed w-full">
      <div>
        <nav className="container m-auto flex justify-between py-7">
          <div className="text-white flex gap-10 items-center">
            <Link className="text-xl" to="/">TayThrifts</Link>
            <Link to="/" className=" opacity-50 hover:opacity-75">Trends</Link>
            <Link to="/" className=" opacity-50 hover:opacity-75">Highlight</Link>
            <Link to="/" className=" opacity-50 hover:opacity-75">Features</Link>
            <Link to="/" className=" opacity-50 hover:opacity-75">Testimonals</Link>
            <Link to="/" className=" opacity-50 hover:opacity-75">Team</Link>
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
