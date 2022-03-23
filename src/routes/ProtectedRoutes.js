import React from 'react'
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes(props) {
  const accountType = window.sessionStorage.getItem("accountType");
  const accountId = window.sessionStorage.getItem("account_id");
  if(accountType === null && accountId === null){
    return <Navigate to="/login" replace />
  } else {
    if(props.accountType === accountType){
      return <Outlet />
    } else {
      return <Navigate to="/login" replace />
    }
  }
}

export default ProtectedRoutes