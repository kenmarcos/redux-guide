import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const productIsAlreadyInCart = state.products.some(
        (product) => product.id === action.payload.id,
      );

      if (!productIsAlreadyInCart) {
        state.products = [
          ...state.products,
          { ...action.payload, quantity: 1 },
        ];

        return;
      }

      state.products = state.products.map((product) => {
        if (product.id === action.payload.id) {
          return { ...action.payload, quantity: product.quantity + 1 };
        }

        return product;
      });
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload,
      );
    },
    increaseProductQuantity: (state, action) => {
      state.products = state.products.map((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }

        return product;
      });
    },
    decreaseProductQuantity: (state, action) => {
      state.products = state.products
        .map((product) => {
          if (product.id === action.payload) {
            return {
              ...product,
              quantity: product.quantity - 1,
            };
          }

          return product;
        })
        .filter((product) => product.quantity > 0);
    },
  },
});

export const {
  addProduct,
  removeProduct,
  increaseProductQuantity,
  decreaseProductQuantity,
} = cartReducer.actions;

export default cartReducer.reducer;
