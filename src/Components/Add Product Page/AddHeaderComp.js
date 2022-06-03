import React from "react";
import {Link} from "react-router-dom";

//Add product page header component
function AddHeaderComp(){
    
    return <div>
        <div className="flexbox-main">
        <div className="header-bar">
            <div className="title-holder">
                <h1 className="main-title">
                    Add product
                </h1>
            </div>
            <div className="btn-holder">
                <button type="submit" className="btn btn-primary">Save</button>
                <Link to="/"><button type="button" className="btn btn-primary">Cancel</button></Link>
            </div>

            </div>
            <div className="hr-bar">
                <hr></hr>
            </div>
        </div>
    </div>
    
}

export default AddHeaderComp;