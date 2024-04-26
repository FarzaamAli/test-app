
import { Outlet } from 'react-router-dom'
import AdminHeader from '../../components/header/AdminHeader'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function adminLayout() {
  return (
    <>
        <AdminHeader/>
        <Outlet/>
    </>
  )
}

export default adminLayout