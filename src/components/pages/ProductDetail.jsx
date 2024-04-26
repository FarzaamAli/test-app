import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../services/product.services'

function ProductDetail() {
    const { id } = useParams()


    useEffect(() => {
        if (id) {
            (async () => {
                const detailResponse = await getProductById(id)
                console.log(detailResponse);
            })()
        }
    }, [id])

    return (
        <div>ProductDetailPage</div>
    )
}

export default ProductDetail