import { CartContextProvider } from "./cart-context";

const ContextsProvider = ({ children }) => {
  return <CartContextProvider>{children}</CartContextProvider>;
};

export default ContextsProvider;
