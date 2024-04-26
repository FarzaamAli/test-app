import React from 'react'
import { useForm } from 'react-hook-form'
import { addProduct } from '../../services/product.services'

const onSubmit = async (data) => {
  const addProductResponse = await addProduct(data)
  reset()
  alert('Product added successfully')
}


function ProductAdd() {
  
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

  return (
    <div className=' p-10 m-auto '>
      <div className=' text-center mb-6 font-bold text-2xl'>ADD ITEMS</div>
       <form onSubmit={handleSubmit(onSubmit)} >
            <label for="name" className=" block mb-2 text-sm font-medium">Name</label>
            <input type='text' placeholder='Enter name of product' className="mb-2 bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5"{...register("name", { required: true })} />
            {errors.name && <span>required</span>}
            <br />

            <label for="price" className=" block mb-2 text-sm font-medium">Price</label>
            <input type='number' placeholder='Price of product' className="mb-2 bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5" {...register("price", { required: true })} />
            {errors.price && <span>required</span>}
            <br />

            <label for="quantity" className=" block mb-2 text-sm font-medium">Quantity</label>
            <input type='number' placeholder='Quantity of product' className="mb-2 bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5" {...register("qty", { required: true })} />
            {errors.qty && <span>required</span>}
            <br />

            <label for="Description of product" className=" block mb-2 text-sm font-medium">Description</label>
            <textarea placeholder='description' cols="30" rows="10" className="mb-2 bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5" {...register("description", { required: true })}></textarea>
            {errors.description && <span>required</span>}
            <br />

            <button type="submit" className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 ">Add Item</button>
        </form>
    </div>
  )
}

export default ProductAdd