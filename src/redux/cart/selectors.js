export const selectProductsCount = (store) => {
  return store.cart.products.reduce((acc, curr) => acc + curr.quantity, 0);
};

export const selectProductsTotalPrice = (store) => {
  return store.cart.products.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0,
  );
};
