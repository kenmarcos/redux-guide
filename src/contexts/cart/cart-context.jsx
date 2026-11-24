import { createContext, useContext, useReducer } from "react";

import { cartInitialState, cartReducer } from "./cart-reducer";

const CartStateContext = createContext(null);
const CartDispatchContext = createContext(null);

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const { products } = state;

  const productsCount = products.reduce((acc, curr) => acc + curr.quantity, 0);

  const productsTotalPrice = products.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0,
  );

  return (
    <CartStateContext.Provider
      value={{
        products,
        productsCount,
        productsTotalPrice,
      }}
    >
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
};

export const useCartState = () => {
  const cartContext = useContext(CartStateContext);

  if (!cartContext) {
    throw new Error("useCartState must be used within CartContextProvider");
  }

  return cartContext;
};

export const useCartDispatch = () => {
  const context = useContext(CartDispatchContext);

  if (!context) {
    throw new Error("useCartDispatch must be used within CartContextProvider");
  }

  return context;
};
