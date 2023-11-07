import { createSlice } from "@reduxjs/toolkit";
import categories from "../../data/categories";
import products from "../../data/products";

const initialState = {
    categories: [],
    products: [],
    productsFilteredByCategory: [],
    categorySelected: null,
    productsIdSelected:null,
}

export const shopSlice = createSlice ({
    name:'shop',
    initialState,
    reducers:{
        setCategorySelected:(state, action) =>{
            state.categorySelected = action.payload
        },
        setproductsIdSelected:(state, action) =>{
            state.productsIdSelected = action.payload

        }

    }



})

export const {setCategorySelected, setproductsIdSelected} =shopSlice.actions

export default shopSlice.reducer
