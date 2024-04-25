import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
   <nav className=' flex justify-between bg-gray-600 px-20 py-3'>
        <div className=''>
            E-Store
        </div>

        <div className=' justify-between'>
            <ul className=' flex list-none justify-between gap-4'>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/contact'}>Contact</Link></li>
                <li><Link to={'/product'}>Products</Link></li>
                <li><Link to={'/login'}>Login</Link></li>
                <li></li>
            </ul>
        </div>
   </nav>
  )
}

export default Header