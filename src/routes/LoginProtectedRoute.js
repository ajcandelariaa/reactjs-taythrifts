import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function LoginProtectedRoute() {
  const accountType = window.sessionStorage.getItem("accountType");
  const accountId = window.sessionStorage.getItem("account_id");
  if (accountType === null && accountId === null) {
    return <Outlet />;
  } else {
    if (accountType === "customer") {
      return <Navigate to="/marketplace" replace />;
    } else {
      return <Navigate to="/dashboard" replace />;
    }
  }
}

export default LoginProtectedRoute;
