import { configureStore} from "@reduxjs/toolkit";
import productSlice from "./productList";

const store = configureStore({
   reducer: {
        productsList: productSlice.reducer
   }
})

export default store;