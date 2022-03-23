import React from 'react'
import { Outlet } from 'react-router-dom'
import RegistrationNavbar from '../components/navbars/RegistrationNavbar'

function RegistrationLayout() {
  return (
    <div>
      <RegistrationNavbar link="../images/taythrifts_logo.png" />
      <Outlet />
    </div>
  )
}

export default RegistrationLayout