import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        items : [],
        totalQuantity : 0
    },
    reducers : {
        addItemToCart (state, action){
          const newItem = action.payload;
          const existingIem = state.items.find(item => item.id == newItem.id);
          state.totalQuantity++;
          if(!existingIem){
            state.items.push({
                id : newItem.id,
                price : newItem.price,
                totalPrice : newItem.price,
                quantity : 1,
                price : newItem.price,
                name : newItem.title
            });
          } else {
            existingIem.quantity++;
            existingIem.totalPrice = existingIem.totalPrice + newItem.price;
          }
        },
        removeItemFromCart (state, action){
          const id = action.payload.id;
          const existingIem = state.items.find(item => item.id != id);
          state.totalQuantity--;
          if(existingIem.quantity == 1){
            state.items =  state.items.filter(item => item.id != id);
          } else {
            existingIem.quantity--;
            existingIem.totalPrice = existingIem.totalPrice - existingIem.price;
          }
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;