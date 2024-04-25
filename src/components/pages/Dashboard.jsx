import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  
  
    const navigate = useNavigate()
    const [isAdmin, setIsAdmin] = useState(true)
  
  useEffect(() => {
       
        if (isAdmin === true) {
            // setIsLoggedIn(true)
            navigate('/Dashboard')
        } else {
            // setIsAdmin(false)
            navigate('/')
        }
    }, [])
  
  
    // if (isAdmin === false) {
    //     return null
    // }
  
    return (
    <div>Dashboard</div>
  )
}

export default Dashboard