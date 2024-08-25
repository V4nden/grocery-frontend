import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import cartSlice from "../entities/cart/model/cartSlice";
import { itemsApi } from "../entities/item/api/itemApi";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    [itemsApi.reducerPath]: itemsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(itemsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
