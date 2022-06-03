import React from "react";
import ProductTile from './ProductTileComp'
import {useSelector} from "react-redux";

//Product list render component
function ProductList(){
   
    //Retrieves state for product tile render
    const list = useSelector((state) => state.productsList.list);
    
    return <div className="product-list">
       {(list!=null)? list.map((items) => (<ProductTile key = {items.SKU} data = {items}/>)): console.log("waiting for data")}
    </div> 
}

export default ProductList;