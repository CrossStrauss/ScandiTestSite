import { createSlice } from "@reduxjs/toolkit";

//Product list state populated from database;
const productSlice = createSlice({
    name: 'productsList',
    initialState: {prodList:[{
        SKU:0,
        prod_name:'',
        prod_price:0,
        prod_attribute:'',
        prod_type:''
    }]},
    reducers:{
        retrieveList(state, action){
           state.list = action.payload;
        }
    }
})
 
export const getListActions = productSlice.actions;

export default productSlice;