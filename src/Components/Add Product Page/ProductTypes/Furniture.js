import React from "react";
import { addData } from "../../../Api/DataManager";

const typeTextHeight = 'Height(CM)';
const typeTextWidth = 'Width(CM)';
const typeTextLength = 'Length(CM)';

let height = '';
let width = '';
let length = '';

//Furniture type component
function Furniture(){

    //Populates the type specific variable in the DataManager
    function gatherData(event){
        
        switch(event.target.id){
            case 'height':
                height = event.target.value;
                break;
            case 'width':
                width = event.target.value;
                break;
            case 'length':
                length = event.target.value;
                break;
            }
        addData.type = 'Furniture';
        addData.details = height + 'x' + width + 'x' +length;
        console.log(addData);
    }

    return<div>
        <h3 className="info-text">Please enter the dimensions of the item of Furniture</h3>
        <label className="lbl-style">{typeTextHeight}</label>
        <input className="input-style" type="text" id="height" onChange={gatherData} required pattern="[1-9][0-9]*"/> <br/>
        <label className="lbl-style">{typeTextLength}</label>
        <input className="input-style" type="text" id="width" onChange={gatherData} required pattern="[1-9][0-9]*"/> <br/>
        <label className="lbl-style">{typeTextWidth}</label>
        <input className="input-style" type="text" id="length" onChange={gatherData} required pattern="[1-9][0-9]*"/> <br/>
    </div>
}

export default Furniture;