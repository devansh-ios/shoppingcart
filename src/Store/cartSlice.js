import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalPrice: 0,
  quantity: 0,
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
      const card = action.payload
state.cartItems= state.cartItems.filter((item) => item.id !== card);
state.quantity--;
    },
    
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice;
