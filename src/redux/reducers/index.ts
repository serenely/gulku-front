import { combineReducers } from "redux";
import productsReducer from "./reducers";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import loadingReducer from "./loader";
import authReducer from "./authReduser";
import userReducer from "./userReduser";

const rootReducer = combineReducers({
    products: productsReducer,
    product: productReducer,
    cart: cartReducer,
    loading: loadingReducer,
    user: userReducer,
    auth: authReducer,
  });
  
export default rootReducer;