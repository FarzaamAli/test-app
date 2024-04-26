import { useEffect, useState } from "react"
import { getAllProducts } from "../../services/product.services"
import ProductCard from "../product/ProductCard"




function Product() {
  const [products, setProducts] = useState(null)
  useEffect(() => {
    (async () => {
      const productsResponse = await getAllProducts()
      setProducts(productsResponse)
    })()
  }, [])

  if (!products) return null

  return (
    <>
    <h1>Product Listing</h1>
    {
      products.map((product, idx) => {
        return <ProductCard {...product} />
      })
    }
  </>
  )
}

export default Product