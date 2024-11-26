import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.cart.find(
        (item) => item.id == action.payload.id
      );
      if (existingProduct) {
        const remainingProducts = state.cart.filter(
          (item) => item.id != existingProduct.id
        );
        existingProduct.quantity++;
        existingProduct.totalPrice =
          existingProduct.price * existingProduct.quantity;
        state.cart = [...remainingProducts, existingProduct];
      } else {
        state.cart.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.price,
        });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    emptyCart:(state)=>{
       state.cart=[]
    }
  },
});

export const { addToCart, removeFromCart ,emptyCart} = cartSlice.actions;
export default cartSlice.reducer;