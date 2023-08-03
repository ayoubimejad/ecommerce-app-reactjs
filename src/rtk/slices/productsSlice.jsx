import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
    
export const fetchProducts = createAsyncThunk("productSlice/fetchProduct", async() => {
  const res = await fetch("https://itproducts.onrender.com/products");
  const data = await res.json();
  return data;
})
export const productsSlice = createSlice({
  
  name: 'productSlice',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state,action) => {
      return action.payload;
    })
  }
})

// Action creators are generated for each case reducer function
export const { addToCart } = productsSlice.actions

export default productsSlice.reducer