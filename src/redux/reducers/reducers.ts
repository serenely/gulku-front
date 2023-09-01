import {
   FETCH_PRODUCTS_REQUEST,
   FETCH_PRODUCTS_FAILURE, 
   FETCH_PRODUCTS_SUCCESS, 
  } from "../../utils/constants";
import { ProductsActionTypes, ProductsState } from "../../utils/interface";

const initialState: ProductsState = {
  productItems: [],
  error: null,
  isLoading: false,
};

const productsReducer = (state = initialState, action: ProductsActionTypes): ProductsState => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        productItems: action.payload,
        error: null,
        isLoading: false,
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
