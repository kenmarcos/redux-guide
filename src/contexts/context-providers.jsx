import { CartContextProvider } from "./cart/cart-context";

const ContextProviders = ({ children }) => {
  return <CartContextProvider>{children}</CartContextProvider>;
};

export default ContextProviders;
