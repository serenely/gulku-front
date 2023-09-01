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
  LOGOUT_SUCCESS
} from "../../utils/constants";
import { 
  FetchUserAction,
  Product,
  ProductActionTypes,
  ProductsActionTypes, 
  SetErrorAction, 
  User,
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

  export const fetchUser = (user: User): FetchUserAction => ({
    type: FETCH_USER,
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