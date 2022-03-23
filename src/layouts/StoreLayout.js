import React from 'react'
import { Outlet } from 'react-router-dom'
import StoreNavbar from '../components/navbars/StoreNavbar'

function StoreLayout() {
  return (
    <div>
      <StoreNavbar link="../images/taythrifts_logo.png" />
      <Outlet />
    </div>
  )
}

export default StoreLayout