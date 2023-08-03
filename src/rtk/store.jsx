import { configureStore } from '@reduxjs/toolkit'
import pruductstReducer from './slices/productsSlice'
import cartSlice from './slices/cartSlice'

export default configureStore({
    reducer: {
        products: pruductstReducer,
        cart: cartSlice
    },
})