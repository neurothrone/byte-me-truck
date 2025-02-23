import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../api/base-api.ts";
import cartReducer from "../redux/cart-slice";
// RTK Query needs these imports for the API slices to be recognized
import "../api/menu-api";
import "../api/order-api";
import "../api/receipt-api";

export const store = configureStore({
  reducer: {
    // Only baseApi.reducer needs to be included in the store because
    // menu-api, order-api, and receipt-api extend it
    [baseApi.reducerPath]: baseApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
