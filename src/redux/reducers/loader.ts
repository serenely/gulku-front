import { START_LOADING_PRODUCTS, STOP_LOADING_PRODUCTS } from "../../utils/constants";

interface LoadingState {
    isLoading: boolean;
  }
  
  const initialState: LoadingState = {
    isLoading: false,
  };
  
  const loadingReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case START_LOADING_PRODUCTS:
        return {
          ...state,
          isLoading: true,
        };
      case STOP_LOADING_PRODUCTS:
        return {
          ...state,
          isLoading: false,
        };
      default:
        return state;
    }
  };
  
  export default loadingReducer;