import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "https://fakestoreapi.com/products";

const initialState = {
  cartItems: [],
  total: 0,
  quantity: 0,
};

export const getCartItems = createAsyncThunk("cart/getCartitems", () => {
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log(err));
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});
export default cartSlice;
