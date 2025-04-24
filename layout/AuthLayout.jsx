import React from 'react'
import { Outlet } from 'react-router-dom'
import Login from '../pages/Login'


function AuthLayout() {
  return (
    <Login />
  )
}

export default AuthLayout