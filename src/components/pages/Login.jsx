import React from 'react'
import { useForm } from "react-hook-form"
function Login() {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <>
      <div className=' p-10 m=auto '>

        <form onSubmit={handleSubmit(onSubmit)} action="#">
          <div className=''>
            <label for="first_name" className=" block mb-2 text-sm font-medium">E-mail</label>
            <input type="text" id="first_name" className=" mb-4 bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="abc@email.com" required {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Invalid email address',
              },
            })} />
          </div>

          <div class="mb-6">
            <label for="password" className="block mb-2 text-sm font-medium">Password</label>
            <input type="password" id="password" class="border  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="•••••••••" required  {...register("password", {
              required: true
            })} />
          </div>

          <button type="submit" className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 ">Submit</button>

        </form>
      </div>



    </>
  )
}

export default Login