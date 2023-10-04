import { createSlice } from "@reduxjs/toolkit";
import categories from "../../data/categories";
import products from "../../data/products";

const initialState = {
    categories: categories,
    products: products,
    productsFilteredByCategory: [],
    categorySelected: null,
    productsIdSelected:null,
}

export const shopSlice = createSlice ({
    name:'shop',
    initialState,
    reducers:{
        setCategorySelected:() =>{

        },
        setproductsIdSelected:() =>{

        }

    }



})

export const {setCategorySelected, setproductsIdSelected} =shopSlice.actions
export default shopSlice.reducer
