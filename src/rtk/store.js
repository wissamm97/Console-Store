import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slices/cart-Slice";
import favSlice from "./Slices/fav-Slice";
import PsSlice from "./Slices/ps-slice";
import xboxSlice from "./Slices/xbox-slice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    fav: favSlice,
    xbox: xboxSlice,
    ps: PsSlice,
  },
});
