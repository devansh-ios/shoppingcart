import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  quantity: 0,
  totalPrice: 0,
  price: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart(state, action) {
      const item = action.payload;
      state.cartItems.push(item);
      state.quantity++;
    },
    removeFromCart(state, action) {
      const card = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== card);
      state.quantity--;
    },
    calculatePrice(state) {
      let total=0;
      state.cartItems.forEach((item) => {
        total += item.price;
      });
      state.totalPrice = total;
    },
    removeAll(state) {
      state.cartItems = [];
      state.quantity = 0;
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice;
