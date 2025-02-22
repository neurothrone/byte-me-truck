import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MenuItem } from "../types/menu";

interface CartItem extends MenuItem {
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {items: []};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<MenuItem>) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({...action.payload, quantity: 1});
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
