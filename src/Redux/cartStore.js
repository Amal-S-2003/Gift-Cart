import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Slice/ProductSlice";
import  wishlistSlice  from "./slice/wishlistSlice";

const cartStore = configureStore({
  reducer: {
    productReducer: productSlice,
    wishlistReducer: wishlistSlice,
  },
});

export default cartStore;
