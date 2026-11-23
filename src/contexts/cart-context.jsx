const { createContext, useContext, useState } = require("react");

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const productsCount = products.reduce((acc, curr) => acc + curr.quantity, 0);

  const productsTotalPrice = products.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0,
  );

  const addProduct = (payload) => {
    const productIsAlreadyInCart = products.some(
      (product) => product.id === payload.id,
    );

    if (!productIsAlreadyInCart) {
      setProducts((prevProducts) => {
        return [...prevProducts, { ...payload, quantity: 1 }];
      });

      return;
    }

    setProducts((prevProducts) =>
      prevProducts.map((prevProduct) => {
        if (prevProduct.id === payload.id) {
          return { ...prevProduct, quantity: prevProduct.quantity + 1 };
        }

        return prevProduct;
      }),
    );
  };

  const removeProduct = (payload) => {
    setProducts((prevProduct) =>
      prevProduct.filter((product) => product.id !== payload),
    );
  };

  const increaseProductQuantity = (payload) => {
    setProducts((prevProducts) =>
      prevProducts.map((prevProduct) =>
        prevProduct.id === payload
          ? { ...prevProduct, quantity: prevProduct.quantity + 1 }
          : prevProduct,
      ),
    );
  };

  const decreaseProductQuantity = (payload) => {
    setProducts((prevProducts) =>
      prevProducts
        .map((prevProduct) =>
          prevProduct.id === payload
            ? { ...prevProduct, quantity: prevProduct.quantity - 1 }
            : prevProduct,
        )
        .filter((prevProduct) => prevProduct.quantity > 0),
    );
  };

  return (
    <CartContext.Provider
      value={{
        products,
        productsCount,
        productsTotalPrice,
        addProduct,
        removeProduct,
        increaseProductQuantity,
        decreaseProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("Cart Context should be used within a Provider");
  }

  return cartContext;
};
