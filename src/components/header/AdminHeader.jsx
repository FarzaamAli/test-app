import React from 'react'
import { Link } from 'react-router-dom'

function adminHeader() {
  return (
    <nav className=' flex justify-between bg-gray-600 px-20 py-3'>
        <div className=''>
            E-Store
        </div>

        <div className=' justify-between'>
            <ul className=' flex list-none justify-between gap-4'>
                <li><Link to={'/dashboard'}>Dashboard</Link></li>
                <li><Link to={'/product_list'}>Product List</Link></li>
             
                <li></li>
            </ul>
        </div>
   </nav>
  )
}

export default adminHeader