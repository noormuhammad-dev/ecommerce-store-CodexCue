import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [1, 2, 3, 4],
  reducers: {
    addToCart: (state, action) => {
      return [...state, action.payload];
    },
    emptyCart: () => {
      return [];
    },
    deleteProduct: (state, action) => {
      return state.filter((item) => item != action.payload);
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
