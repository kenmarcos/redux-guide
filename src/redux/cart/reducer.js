import CartActionTypes from "./action-types";

const initialState = {
  products: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:
      const productIsAlreadyInCart = state.products.some(
        (product) => product.id === action.payload.id,
      );

      if (!productIsAlreadyInCart) {
        return {
          ...state,
          products: [...state.products, { ...action.payload, quantity: 1 }],
        };
      }

      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...action.payload,
              quantity: product.quantity + 1,
            };
          }
          return product;
        }),
      };

    case CartActionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload,
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;
