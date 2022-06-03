import React from "react";
import { addData } from "../../../Api/DataManager";

const typeText = 'Weight (KG)';

//Book type component
function Book(){

    //Populates the type specific variable in the DataManager
    function gatherData(event){
        addData.type = 'Book';
        addData.details = event.target.value;
        console.log(addData);
    }
    
    return<div>
        <h3 className="info-text">Please enter the weight of the book</h3>
        <label className="lbl-style">{typeText}</label>
        <input className="input-style" type="text" id="weight" onChange={gatherData} required pattern="[1-9][0-9]*"/>
    </div>
}

export default Book;