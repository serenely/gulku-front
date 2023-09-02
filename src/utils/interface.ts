import {
   FETCH_PRODUCTS_FAILURE, 
   FETCH_PRODUCTS_REQUEST, 
   FETCH_PRODUCTS_SUCCESS, 
   FETCH_PRODUCT_FAILURE, 
   FETCH_PRODUCT_REQUEST, 
   FETCH_PRODUCT_SUCCESS, 
   FETCH_USER,
   FETCH_USER_LOG,
   SET_ERROR,
} from "./constants";

export interface UserReg {
  fullName: string;
  password: string;
  email: string;
  address: string;
  isAdministrator: boolean;
  token: String;
}
export interface UserLog {
  email: string;
  password: string;
}

export interface Product {
  imageUrl: string;
  _id: string;
  title: string;
  text: string;
  price: number;
  amount: number;
  currency: string;
}
export interface ProductsState {
  productItems: Product[];
  error: string | null;
  isLoading: boolean;
}
export interface ProductState {
  productItem: Product[];
  error: string | null;
  isLoading: boolean;
}
export interface ProductCart {
  imageUrl: string;
  _id: string;
  text: string;
  title: string;
  price: number;
  amount: number;
  currency: string;
}
export interface FetchProductsRequestAction {
  type: typeof FETCH_PRODUCTS_REQUEST;
}
export interface FetchProductsSuccessAction {
  type: typeof FETCH_PRODUCTS_SUCCESS;
  payload: Product[];
}
export interface FetchProductsFailureAction {
  type: typeof FETCH_PRODUCTS_FAILURE;
  payload: string;
}

export type ProductsActionTypes =
| { type: typeof FETCH_PRODUCTS_REQUEST }
| { type: typeof FETCH_PRODUCTS_SUCCESS; payload: Product[] }
| {
    payload: string | null; type: typeof FETCH_PRODUCTS_FAILURE; error: string
};

export interface FetchProductRequestAction {
  type: typeof FETCH_PRODUCT_REQUEST;
}

export interface FetchProductSuccessAction {
  type: typeof FETCH_PRODUCT_SUCCESS;
  payload: Product[];
}

export interface FetchProductFailureAction {
  type: typeof FETCH_PRODUCT_FAILURE;
  payload: string;
}

export type ProductActionTypes =
| { type: typeof FETCH_PRODUCT_REQUEST }
| { type: typeof FETCH_PRODUCT_SUCCESS; payload: Product[] }
| {
    payload: string | null; type: typeof FETCH_PRODUCT_FAILURE; error: string 
};


export interface CartState {
  cartItems: Product[];
  error: string | null;
}


export interface UserState {
  user: UserReg | null;
  error: string | null;
}

export interface FetchUserAction {
  type: typeof FETCH_USER;
  payload: UserReg; 
}
export interface FetchUserLogAction {
  type: typeof FETCH_USER_LOG;
  payload: UserLog; 
}

export interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: string;
}

export interface ApiResponse<UserReg> {
  data: UserReg;
  error: string | null;
}
