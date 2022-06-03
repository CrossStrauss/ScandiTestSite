import React from "react";
import { addData } from "../../../Api/DataManager";

const typeText = 'Size(MB)';

//DVD type component
function DVD(){

    //Populates the type specific variable in the DataManager
    function gatherData(event){
        addData.type = 'DVD';
        addData.details = event.target.value;
        console.log(addData);
    }
    
    return<div>
        <h3 className="info-text">Please enter the capacity of the DVD</h3>
        <label className="lbl-style">{typeText}</label>
        <input className="input-style" type="text" id="size" onChange={gatherData} required pattern="[1-9][0-9]*"/>
    </div>
}

export default DVD;