import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authSlice from "./auth-slice";
import cartSliceReducer from "./cart-slice";

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSliceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});



export default store;


