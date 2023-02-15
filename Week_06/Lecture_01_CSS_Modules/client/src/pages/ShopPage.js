import { useState } from "react"
import products from "../products"

const ShopPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [filteredCategory, setFilteredCategory] = useState("")

  // TODO: Render the filtered products based on the category

  return (
    <div>


    </div>
  )
}

export default ShopPage