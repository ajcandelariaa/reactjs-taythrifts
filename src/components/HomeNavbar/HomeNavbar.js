import React from "react";
import { Link } from "react-router-dom";

function HomeNavbar() {
  return (
    <nav>
      <Link to="/">TayThrifts</Link>
      <Link to="/">Trends</Link>
      <Link to="/">Highlight</Link>
      <Link to="/">Features</Link>
      <Link to="/">Testimonals</Link>
      <Link to="/">Team</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </nav>
  );
}

export default HomeNavbar;
