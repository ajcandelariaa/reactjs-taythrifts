import React from "react";
import { Outlet } from "react-router-dom";
import CustomerNavbar from "../components/navbars/CustomerNavbar";

function CustomerLayout() {
  return (
    <div>
      <CustomerNavbar link="../images/taythrifts_logo.png" />
      <Outlet />
    </div>
  );
}

export default CustomerLayout;
