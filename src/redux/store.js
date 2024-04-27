
import {configureStore} from '@reduxjs/toolkit';
import cartSlice from '../features/cartSlice';
import categorySlice from '../features/categorySlice';


export const store=configureStore({
    reducer:{
        cart:cartSlice,
        category:categorySlice
    }
})

