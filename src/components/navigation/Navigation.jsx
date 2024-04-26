import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "../../App";
import Layout from '../../Layout/user/Layout';
import AdminLayout from '../../Layout/admin/AdminLayout';
import About from '../pages/About'
import Product from '../pages/Product'
import Contact from '../pages/Contact'
import Auth_Layout from '../../Layout/auth/Auth_Layout';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Dashboard from '../pages/Dashboard';
import ProductListAdmin from '../pages/ProductListAdmin';
import ProductDetail from '../pages/ProductDetail';

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
         {
          path: "/product/:id",
          element: <ProductDetail />
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
      
      element:<AdminLayout/>,
      children : [
        {
          path:"/dashboard",
          element : <Dashboard/>
        },
        {
          path:"/product_list",
          element : <ProductListAdmin/>
        }
      ]
    }
   
  ]);


function Navigation() {
  return (
    <RouterProvider router={router} />
  )
}

export default Navigation