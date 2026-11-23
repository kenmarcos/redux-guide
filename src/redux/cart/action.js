import CartActionTypes from "./action-types";

export const addProduct = (payload) => {
  return {
    type: CartActionTypes.ADD_PRODUCT,
    payload,
  };
};
