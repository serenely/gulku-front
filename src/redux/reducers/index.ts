import { combineReducers } from "redux";
import productsReducer from "./reducers";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import loadingReducer from "./loader";
import authReducer from "./authReduser";

const rootReducer = combineReducers({
    products: productsReducer,
    product: productReducer,
    cart: cartReducer,
    loading: loadingReducer,
    auth: authReducer,
  });
  
export default rootReducer;