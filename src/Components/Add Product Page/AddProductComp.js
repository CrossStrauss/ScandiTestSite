import React  from "react";
import { useNavigate } from 'react-router-dom';
import AddHeaderComp from "./AddHeaderComp"
import AddProductForm from "./AddProdForm";
import Footer from "../General Components/Footer"
import { useDispatch } from "react-redux";
import {getListActions} from '../../state/productList';
import {addData, url} from '../../Api/DataManager'
import axios from "axios";

//Add product main component
function AddProduct(){
    
    const dispatch = useDispatch();
    
    const navTo = useNavigate()
 
    //Saves new product and updates the state.
    function SaveToDB(e){

        e.preventDefault();

        axios.post(url,{action:'Insert', toAdd:addData}).then(() => {
            axios.post(url,{action:'Get'}).then(response => {
                const data = response;
                dispatch(getListActions.retrieveList(data.data.items));
                navTo('/');
            })
        });   
    } 
    
    return <form className="add-product-page" id="product_form" onSubmit={SaveToDB}>
        <AddHeaderComp/>
        <AddProductForm/>
        <Footer/>
    </form>
}

export default AddProduct;