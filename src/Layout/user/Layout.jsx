
import { Outlet } from 'react-router-dom'
import Header from '../../components/header/UserHeader'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Layout() {



  


  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default Layout