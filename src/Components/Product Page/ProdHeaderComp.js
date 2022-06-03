import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {populateArray,resetArray,url} from '../../Api/DataManager'
import {useDispatch} from "react-redux";
import {getListActions} from '../../state/productList'

//Product page header component
function Header(){
    
    const dispatch = useDispatch(); 

    //Deletes product from the database using the DataManager delete array and updates the state.
    function MassDelete(){
        axios.post(url,{action:'Delete', delList:populateArray()}).then(() =>{
            axios.post(url,{action:'Get'}).then(response => {
                const data = response;
                dispatch(getListActions.retrieveList(data.data.items));
            })
        })
        resetArray();
    } 

    return <div className="flexbox-main">
        <div className="header-bar">
            <div className="title-holder">
                <h1 className="main-title">
                    Product page
                </h1>
            </div>
            <div className="btn-holder">
            <Link to="/addProduct">
                <button id="add-product-btn" type="button" className="btn btn-primary">Add</button>
            </Link>
                <button id="delete-product-btn" type="button" className="btn btn-primary" onClick={MassDelete}>Mass delete</button>
            </div>

        </div>
        <div className="hr-bar">
            <hr></hr>
        </div>
    </div>
}

export default Header;