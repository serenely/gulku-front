import {
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_REQUEST
} from "../../utils/constants";
import { ProductActionTypes, ProductState } from "../../utils/interface";

const initialState: ProductState = {
    productItem: [],
    error: null,
    isLoading: false,
  };
  
const productReducer = (state = initialState, action: ProductActionTypes): ProductState => {
    switch (action.type) {
      case FETCH_PRODUCT_REQUEST:
        return {
          ...state,
          isLoading: true,
        }
      case FETCH_PRODUCT_SUCCESS:
        return {
          ...state,
          productItem: action.payload,
          error: null,
          isLoading: false,
        };
      case FETCH_PRODUCT_FAILURE:
        return {
          ...state,
          error: action.payload,
          isLoading: false,
        };
      default:
        return state;
    }
  };

  export default productReducer;