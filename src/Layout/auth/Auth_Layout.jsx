
import { Outlet } from 'react-router-dom'

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Auth_Layout() {
  
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(false)

        // useEffect(() => {
        //         // // let isLoggedIn = JSON.parse(sessionStorage.getItem('user'))
        //         // console.log(isLoggedIn)
        //         if (isLoggedIn === true) {
        //             // setIsLoggedIn(true)
        //             navigate('/')
        //         } else {
        //             // setIsLoggedIn(false)
        //             navigate('/login')
        //         }
        //     }, [])


    // if (isLoggedIn === false) {
    //     return null
    // }

    return (
    <>
        <Outlet/>
    </>
  )
}
