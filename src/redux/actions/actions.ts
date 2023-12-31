import {
  ADD_TO_CART,
  ADD_TO_CART_FAILURE,
  ADD_TO_CART_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  LOAD_PRODUCTS,
  REMOVE_FROM_CART,
  REMOVE_FROM_CART_FAILURE,
  REMOVE_FROM_CART_SUCCESS,
  START_LOADING_PRODUCTS,
  STOP_LOADING_PRODUCTS,
  UPDATE_CART_FROM_LOCAL_STORAGE,
  UPDATE_CART_ITEM_QUANTITY,
  LOAD_PRODUCTS_FROM_CART, 
  FETCH_USER, 
  SET_ERROR, 
  LOGIN,
  LOGOUT,
  LOGOUT_SUCCESS,
  FETCH_USER_LOG,
  SET_USER,
  FETCH_USER_DATA_REQUEST,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_FAILURE,
  REMOVE_FROM_DATA_FAILURE,
  REMOVE_FROM_DATA_SUCCESS,
  REMOVE_FROM_DATA,
  SET_CURRENT_PAGE
} from "../../utils/constants";
import { 
  FetchUserAction,
  FetchUserLogAction,
  Product,
  ProductActionTypes,
  ProductDeleteFailureAction,
  ProductDeleteSuccessAction,
  ProductsActionTypes, 
  SetErrorAction, 
  SetUserAction, 
  UserLog, 
  UserReg,
     } from "../../utils/interface";

  // PRODUCTS REQUEST ACTION

  export const fetchProductsRequest = (): ProductsActionTypes => ({
    type: FETCH_PRODUCTS_REQUEST,
  });
  
  export const fetchProductsSuccess = (products: Product[]): ProductsActionTypes => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
  });

  export const fetchProductsFailure = (error: string): ProductsActionTypes => ({
    type: FETCH_PRODUCTS_FAILURE,
    error,
    payload: null,
  });

  // PRODUCT REQUEST ACTION

  export const fetchProductRequest = (): ProductActionTypes => ({
    type: FETCH_PRODUCT_REQUEST,
  });
  
  export const fetchProductSuccess = (product: Product[]): ProductActionTypes => ({
    type: FETCH_PRODUCT_SUCCESS,
    payload: product,
  });
  
  export const fetchProductFailure = (error: string): ProductActionTypes => ({
    type: FETCH_PRODUCT_FAILURE,
    error,
    payload: null,
  });

  // Add

  export const addToCart = (product: Product) => ({
    type: ADD_TO_CART,
    payload: product,
  });

  export const addToCartSuccess = (updatedCart: Product[]) => ({
    type: ADD_TO_CART_SUCCESS,
    payload: updatedCart,
  });
  
  export const addToCartFailure = (error: string) => ({
    type: ADD_TO_CART_FAILURE,
    payload: error,
  });

  export const updateCartFromLocalStorage = (cartItems: Product[]) => ({
    type: UPDATE_CART_FROM_LOCAL_STORAGE,
    payload: cartItems,
  });
  
  // Remove

  export const removeFromCart = (productId: string) => ({
    type: REMOVE_FROM_CART,
    payload: productId,
  });
  
  export const removeFromCartSuccess = (productArray: Product[]) => ({
    type: REMOVE_FROM_CART_SUCCESS,
    payload: productArray,
  });
  
  export const removeFromCartFailure = (error: string) => ({
    type: REMOVE_FROM_CART_FAILURE,
    payload: error,
  });

  export const updateCartItemQuantity = (quantity: number) => {
    return {
      type: UPDATE_CART_ITEM_QUANTITY,
      payload: quantity,
    };
  };
  
  export const loadProducts = () => ({
    type: LOAD_PRODUCTS,
  });
  
  export const startLoadingProducts = () => ({
    type: START_LOADING_PRODUCTS,
  });
  
  export const stopLoadingProducts = () => ({
    type: STOP_LOADING_PRODUCTS,
  });

  export const loadProductsFromCart = () => ({
    type: LOAD_PRODUCTS_FROM_CART,
  });

  export const fetchUser = (user: UserReg): FetchUserAction => ({
    type: FETCH_USER,
    payload: user,
  });
  export const fetchUserLog = (user: UserLog): FetchUserLogAction => ({
    type: FETCH_USER_LOG,
    payload: user,
  });
  
  export const setUser = (user: UserReg): SetUserAction => ({
    type: SET_USER,
    payload: user,
  });

  export const setError = (error: string): SetErrorAction => ({
    type: SET_ERROR,
    payload: error,
  });
  
  export const login = () => ({ 
    type: LOGIN
   });
   
  export const logout = () => ({ 
    type: LOGOUT
   });
   export const logoutSuccess = () => ({
      type: LOGOUT_SUCCESS,
  });

  export const fetchUserDataRequest = () => ({
    type: FETCH_USER_DATA_REQUEST,
  });
  
  export const getUserDataSuccess = (userData: any) => ({
    type: GET_USER_DATA_SUCCESS,
    payload: userData,
  });
  
  export const getUserDataFailure = (error: string) => ({
    type: GET_USER_DATA_FAILURE,
    payload: error,
  });

  export const removeFromData = (productId: string, token: string) => ({
    type: REMOVE_FROM_DATA,
    payload: { productId, token },
  });

  export const removeFromDataSuccess = (): ProductDeleteSuccessAction => ({
    type: REMOVE_FROM_DATA_SUCCESS,
  });
  
  export const removeFromDataFailure = (error: string): ProductDeleteFailureAction => ({
    type: REMOVE_FROM_DATA_FAILURE,
    payload: error,
  });

  export const setCurrentPage = (page: number) => ({
    type: SET_CURRENT_PAGE,
    payload: page,
  });