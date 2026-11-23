import CartActionTypes from "./action-types";

export const addProduct = (payload) => {
  return {
    type: CartActionTypes.ADD_PRODUCT,
    payload,
  };
};

export const removeProduct = (payload) => {
  return {
    type: CartActionTypes.REMOVE_PRODUCT,
    payload,
  };
};

export const increaseProductQuantity = (payload) => {
  return {
    type: CartActionTypes.INCREASE_PRODUCT_QUANTITY,
    payload,
  };
};
