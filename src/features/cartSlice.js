import { createSlice } from "@reduxjs/toolkit";
import { carouselData } from "../CarousalProducts";

const initialState = {
  product: carouselData,
  amount: 0,
  total: 0,
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    view: (state, action) => {
      const viewItems = state.product.filter(
        (item) => item.id === action.payload.id
      );
      state.product = viewItems;
    },
    add_to_cart: (state, { payload }) => {
      const existingCart=state.cart.find((item)=>item.id===payload.id);
      if(existingCart){
        state.cart
      }else{
        state.cart.push(payload);

      }
     
      
    },
    remove_item: (state, { payload }) => {
      const item = state.cart.filter((item) => item.id != payload.id);
      state.cart = item;
    },
    increase_Amount: (state, { payload }) => {
      const item = state.cart.find((p) => p.id === payload.id);
    
      item.qty++;
    },
    decrease_Amount: (state, { payload }) => {
      const item = state.cart.find((p) => p.id === payload.id);
        item.qty<=1?1: item.qty--;
     
    },
    zero:(state)=>{
      state.cart.length=0

    }
  },
});
export const {
  view,
  add_to_cart,
  remove_item,
  increase_Amount,
  decrease_Amount,zero
} = cartSlice.actions;
export default cartSlice.reducer;
