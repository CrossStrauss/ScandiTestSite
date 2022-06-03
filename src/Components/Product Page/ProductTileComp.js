import React from "react";
import {populateArray} from '../../Api/DataManager';

function ProductTile(props){

    //Calls DataManager delete function and passes product id 
    function toBeDeleted(){
        populateArray(props.data.SKU);
    }

    let attrText = '';

    //Changes type attribute text depending on product type.
    switch(props.data.prod_type){
        case 'DVD':
            attrText = 'Size(MB): '
            break;
        case 'Book':
            attrText = 'Weight(KG): '
            break;
        case 'Furniture':
            attrText = 'Dimensions(LxBxH): '
            break;
        }
    
    return <div className="product-tile">
        <div className="check-box-div">
            <input className="delete-checkbox" type="checkbox" onClick={toBeDeleted}></input>
        </div>
        <div className="tile-text-div">
            <p>SKU: {props.data.SKU}</p>
            <p>Name: {props.data.prod_name}</p>
            <p>Price: {props.data.prod_price} $</p>
            <p>{attrText}{props.data.prod_attribute}</p>
        </div>
    </div>
}

export default ProductTile;