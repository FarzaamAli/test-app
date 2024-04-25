import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "../../App";
import Layout from '../../Layout/Layout';
import About from '../pages/About'
import Product from '../pages/Product'
import Contact from '../pages/Contact'
import Auth_Layout from '../../Layout/auth/Auth_Layout';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Dashboard from '../pages/Dashboard';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children : [
        {
          path: "",
          element: <App />
         },
        {
          path: "/about",
          element: <About />
         },
        {
          path: "/product",
          element: <Product />
         },
        {
          path: "/contact",
          element: <Contact />
         },
     
       
      ]
    },
    {
      element:<Auth_Layout/>,
      children : [
        {
          path:"/login",
          element : <Login/>
        },
        {
          path:"/signup",
          element : <Signup/>
        }
      ]
    },
    {
      path:"/dashboard",
      element:<Dashboard/>
    }
   
  ]);


function Navigation() {
  return (
    <RouterProvider router={router} />
  )
}

export default Navigation