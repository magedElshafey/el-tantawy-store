import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import cartSlice from "./cart";
import shippingSlice from "./shipping";
const store = configureStore({
  reducer: {
    authSlice,
    cartSlice,
    shippingSlice,
  },
});
export default store;
