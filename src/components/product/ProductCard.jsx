import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard(props) {
  const { name, price, pid } = props

  return (
    <div className='flex m-4'>
      <div className='border-double border-4 border-sky-500 p-4 '>
        <h2 className=' font-bold text-center'>{name}</h2>
        <p className=' p-4'>Price: ${price}</p>
        <button className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 "><Link to={`/product/${pid}`}>view</Link></button>
      </div>
    </div>
  )
}

export default ProductCard