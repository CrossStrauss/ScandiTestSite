import React, { useEffect } from "react";
import axios from "axios";
import Header from "./ProdHeaderComp";
import ProductList from "./ProductListComp";
import Footer from "../General Components/Footer"
import { useDispatch} from "react-redux";
import {getListActions} from '../../state/productList'
import {url} from '../../Api/DataManager'

//Main product page
function ProductPage(){
    
    const dispatch = useDispatch();
    
    //Populates product state variable to render
    useEffect(()=>{
        axios.post(url,{action:'Get'})
        .then(response => {
            dispatch(getListActions.retrieveList(response.data.items));
        });
    },[]);
    
    return( 
        <div>
            <Header/>
            <ProductList/>
            <Footer/>
        </div>
    )
}

export default ProductPage;