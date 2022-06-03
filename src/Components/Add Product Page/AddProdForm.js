import React, {useState} from "react";
import TypeSwitch from "./TypeSwitchComp";
import {addData} from '../../Api/DataManager'

//Add product page product details component
function AddProductForm(){

    const [type,setType] = useState("DVD")

    //Sets the type of product in the DataManager json
    function updateType(event){
        setType(event.target.value)
    }

    //Populates the product variables json in the DataManager
    function gatherData(event){
        switch(event.target.id){
            case 'sku':
                addData.SKU = event.target.value;
                break;
            case 'name':
                addData.prodname = event.target.value;
                break;
            case 'price':
                console.log(addData.price)
                addData.price = event.target.value;
                break;
            }
    }

    return <div className="add-product-form">
            <label className="lbl-style">SKU</label>
            <input className="input-style" type="text" id="sku" onChange={gatherData} required pattern="[1-9][0-9]*"/> <br/>
            <label className="lbl-style">Name</label>
            <input className="input-style" type="text" id="name" onChange={gatherData} required pattern="[a-zA-z]*"/> <br/>
            <label className="lbl-style">Price</label>
            <input className="input-style" type="text" id="price" onChange={gatherData} required pattern="^(0(?!\.00)|[1-9]\d{0,6})\.\d{2}$"/> <br/>
            <label className="switch-style">Type Switcher</label>
            <select id="productType" onChange={updateType}>
                <option value="DVD" id="DVD">DVD</option>
                <option value="Furniture" id="Furniture">Furniture</option>
                <option value="Book" id="Book">Book</option>
            </select>
            <TypeSwitch type={type}/>
    </div>
}

export default AddProductForm;