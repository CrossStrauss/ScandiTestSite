
//Api url
const url = 'http://localhost/PHP-Api/Api/Api/Api.php';

//Delete array
let deleteList = [];

//Add product data json
const addData = {
    SKU: '',
    prodname: '',
    type: '',
    price: '',
    details:'',
}

//Populates and manages deletion array
function populateArray(delSKU){

    let found = false;
    let temp = [];

    //Checks if passed value already exists in array, removes if found and manages 
    //empty array indexes.
    if(delSKU !== undefined){
        for (let i = 0; i < deleteList.length; i++){
            if(delSKU === deleteList[i]){
                deleteList[i] = null;
                found = true;
            }
        }
        if(found === true){
            for(let i = 0; i < deleteList.length; i++){
                if(deleteList[i] !== null){
                    temp.push(deleteList[i]);
                }
            }
            
            deleteList = temp;
            temp = [];
        }
    }
    
    //Adds passed value to array if not found above.
    if(found === false){
        deleteList.push(delSKU);
    }

    console.log(deleteList);

    return deleteList;
    
}

//Resets array after deletion
function resetArray(){
    deleteList = []
}

export {populateArray, addData, url, resetArray};