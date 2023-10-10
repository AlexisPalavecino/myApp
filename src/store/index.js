import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterSlice  from '../features/counter/CounterSlice'
import shopSlice from "../features/shop/shopSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { shopApi } from "../services/shopApi";
import cartSlice from "../features/cart/cartSlice";


const store = configureStore({
    reducer:{
        counter: counterSlice,
        shop: shopSlice,
        cart: cartSlice,
        [shopApi.reducerPath]: shopApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware() .concat (shopApi.middleware)
})

setupListeners(store.dispatch)

export default store