import React from 'react'
import { deleteItem } from '../../services/product.services'

function ProductCardAdmin(props) {
  const { name, price, pid } = props

 
function handle(pid){
  deleteItem(pid)
}

  return (
    <form action="" onSubmit={handle(pid)}>

    <div className='flex m-4'>
      <div className='border-double border-4 border-sky-500 p-4 '>
        <h2 className=' font-bold text-center'>{name}</h2>
        <p className=' p-4'>Price: ${price}</p>
        <button type='submit' className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 ">Delete</button>
      </div>
    </div>
    </form>
  )
}

export default ProductCardAdmin