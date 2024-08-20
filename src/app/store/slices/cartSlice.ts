import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IItem } from "../../types";

interface State {
  cart: { [id: string]: { item: IItem; amount: number } };
  opened: boolean;
}

const initialState: State = {
  cart: {},
  opened: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action: PayloadAction<IItem>) => {
      const item = state.cart[action.payload.id];
      if (item) {
        state.cart[action.payload.id] = {
          item: action.payload,
          amount: item.amount + 1,
        };
      } else {
        state.cart[action.payload.id] = { item: action.payload, amount: 1 };
      }
    },
    removeCartItem: (state, action: PayloadAction<IItem>) => {
      const item = state.cart[action.payload.id];
      if (item.amount - 1 == 0) {
        delete state.cart[action.payload.id];
      } else {
        state.cart[action.payload.id] = { ...item, amount: item.amount - 1 };
      }
    },
    switchOpened: (state) => {
      state.opened = !state.opened;
    },
  },
});

export const { addCartItem, removeCartItem, switchOpened } = cartSlice.actions;
export default cartSlice.reducer;
