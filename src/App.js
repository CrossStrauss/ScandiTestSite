import React from "react";
import ProductPage from "./Components/Product Page/ProductComp";
import AddProduct from "./Components/Add Product Page/AddProductComp";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App(){
  return(
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ProductPage/>}/>
          <Route path="/addProduct" element={<AddProduct/>}/>
        </Routes>
      </div>
    </Router>
    )       
}

export default App;




