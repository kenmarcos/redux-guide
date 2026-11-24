import { CartContextProvider } from "./cart/cart-context";

const Providers = ({ children }) => {
  return <CartContextProvider>{children}</CartContextProvider>;
};

export default Providers;
