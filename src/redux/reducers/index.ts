import { combineReducers } from "redux";
import productsReducer from "./productReducers/productsReducer";
import productReducer from "./productReducers/productReducer";
import cartReducer from "./productReducers/cartReducer";
import loadingReducer from "./productReducers/loader";
import authReducer from "./userReducers/authReduser";
import userReducer from "./userReducers/userReduser";
import removeItemReducer from "./userReducers/removeItemReducer";

const rootReducer = combineReducers({
    products: productsReducer,
    product: productReducer,
    cart: cartReducer,
    loading: loadingReducer,
    user: userReducer,
    auth: authReducer,
    removeItem: removeItemReducer,
  });
  
export default rootReducer;