import { createContext, useReducer } from "react";

export const CartContext = createContext({ cart: [], dispatchCart: () => {} });

const CartProvider = ({ children }) => {
  const [cart, dispatchCart] = useReducer(CartReducer, []);

  return <CartContext.Provider value={{ cart, dispatchCart }}>{children}</CartContext.Provider>;
};

export default CartProvider;
