import { configureStore } from "@reduxjs/toolkit";
import shopSlice from "../features/shop/shopSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { shopApi } from "../services/shopApi";
import cartSlice from "../features/cart/cartSlice";
import { authApi } from "../services/authApi";
import counterSlice from "../features/counter/CounterSlice";


const store = configureStore({
    reducer:{
        counter: counterSlice,
        shop: shopSlice,
        cart: cartSlice,
        [shopApi.reducerPath]: shopApi.reducer,
        [authApi.reducerPath] : authApi.reducer,
    },
    middleware: getDefaultMiddleware => 
    getDefaultMiddleware() .concat (shopApi.middleware, authApi.middleware),
})

setupListeners(store.dispatch)

export default store