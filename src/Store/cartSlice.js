import { createSlice } from "@reduxjs/toolkit";
import data from "../JSON/data.json";

const initialState = {
  cartItems: data,
  cardItem:[],
  totalPrice: 0,
  quantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart(state, action) {
     return state.cardItem.push(action.payload);
       
    },
    removeFromCart(state, action) {
      state.cartItems.filter((state) => state.id !== action.payload);
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice;
