import { createSlice } from "@reduxjs/toolkit";

export const cartSlice= createSlice({
    name: "cartSlice",
    initialState:[],
    reducers: {
        addCart: (state,action)=> {
           state.push(action.payload)
        },
        removeCart: (state,action) => {
          return state.filter((prodct) => {
             return prodct.id !== action.payload
           })
        }
    }
})
export const{addCart,removeCart} =cartSlice.actions;
export default cartSlice.reducer;