import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../services/product.services'

function ProductDetail() {
    const { id } = useParams()
    const [products, setProducts] = useState(null)

    useEffect(() => {
        (async () => {
            const detailResponse = await getProductById(id)
            console.log(detailResponse)
            setProducts(detailResponse)
        })()
    }, [id])

    if (!products) return null

    console.log(products)



    return (
        <>
            <img alt={products.name}/>
            <div className='m-6 p-4'>
                <h1 className=' font-bold text-2xl inline'>{products.name}</h1> - <h1 className='font-bold text-2xl inline'>${products.price}</h1>
                <p className=' font-semibold text-lg '>{products.description}</p>
            </div>
        </>
    )
}

export default ProductDetail