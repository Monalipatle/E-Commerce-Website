import { createContext, useContext, useReducer, useEffect } from "react"

const CartContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const exist = state.find((i) => i.id === action.payload.id)
      if (exist) {
        return state.map((i) =>
          i.id === action.payload.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...state, { ...action.payload, qty: 1 }]

    case "REMOVE":
      return state.filter((i) => i.id !== action.payload)

    case "INC":
      return state.map((i) =>
        i.id === action.payload ? { ...i, qty: i.qty + 1 } : i
      )

    case "DEC":
      return state.map((i) =>
        i.id === action.payload && i.qty > 1
          ? { ...i, qty: i.qty - 1 }
          : i
      )

    case "CLEAR":
      return []

    default:
      return state
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("cart")) || []
  )

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const totalPrice = cart.reduce((a, c) => a + c.price * c.qty, 0)
  const totalItems = cart.reduce((a, c) => a + c.qty, 0)

  return (
    <CartContext.Provider value={{ cart, dispatch, totalPrice, totalItems }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)