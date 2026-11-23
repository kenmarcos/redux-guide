export const selectProductsCount = (store) => {
  return store.cart.products.reduce((acc, curr) => acc + curr.quantity, 0);
};
