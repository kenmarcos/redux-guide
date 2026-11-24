export const CartActionTypes = {
  ADD_PRODUCT: "cart/addProduct",
  REMOVE_PRODUCT: "cart/removeProduct",
  INCREASE_PRODUCT_QUANTITY: "cart/increaseProductQuantity",
  DECREASE_PRODUCT_QUANTITY: "cart/decreaseProductQuantity",
};

export const addProductAction = (payload) => {
  return {
    type: CartActionTypes.ADD_PRODUCT,
    payload,
  };
};

export const removeProductAction = (payload) => {
  return {
    type: CartActionTypes.REMOVE_PRODUCT,
    payload,
  };
};

export const increaseProductQuantityAction = (payload) => {
  return {
    type: CartActionTypes.INCREASE_PRODUCT_QUANTITY,
    payload,
  };
};

export const decreaseProductQuantityAction = (payload) => {
  return {
    type: CartActionTypes.DECREASE_PRODUCT_QUANTITY,
    payload,
  };
};
