import React from "react";
import Book from "./ProductTypes/Book";
import Furniture from "./ProductTypes/Furniture";
import DVD from "./ProductTypes/DVD";

//Enum containing the return value of type components.
const typeEnum ={
    "DVD":<DVD/>,
    "Book":<Book/>,
    "Furniture":<Furniture/>
}

//Returns the correct component for the selected type.
function typeRender(typeId){
    return typeEnum[typeId];
}

//Type render component
function TypeSwitch(props){

    return <div>
        {typeRender(props.type)}
    </div>
}

export default TypeSwitch;