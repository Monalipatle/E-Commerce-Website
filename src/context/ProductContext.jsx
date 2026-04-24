import { createContext, useContext, useEffect, useState } from "react"
import data from "../data/db.json";
const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setProducts(data.products)
      setFilteredProducts(data.products)
      setLoading(false)
    }, 300)
  }, [])

  useEffect(() => {
    let result = products;
    if (search) {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      )
    }
    setFilteredProducts(result);
  }, [search, products]);

  return (
    <ProductContext.Provider
      value={{ filteredProducts, search, setSearch, loading }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export const useProducts = () => useContext(ProductContext)