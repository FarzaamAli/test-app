import React from 'react'
import { Link } from 'react-router-dom'


function ProductListAdmin() {

  const { name, price, pid } = props

  return (
    <div>
            <h2>{name}</h2>
            <p>{price}</p>
            <Link to={`/product/${pid}`}>view</Link>
        </div>
  )
}

export default ProductListAdmin