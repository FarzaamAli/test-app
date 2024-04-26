import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductAdd from '../forms/ProductAdd'

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
    <>
      <ProductAdd/>
    </>
    
  )
}

export default Dashboard