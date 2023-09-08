import { REMOVE_FROM_CART, REMOVE_FROM_DATA_FAILURE, REMOVE_FROM_DATA_SUCCESS } from '../../../utils/constants';

const initialState = {
    isLoading: false,
    error: null,
  };
  
  const removeItemReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case REMOVE_FROM_CART:
        return {
          ...state,
          isLoading: true,
          error: null,
        };
      case REMOVE_FROM_DATA_SUCCESS:
        return {
          ...state,
          isLoading: false,
        };
      case REMOVE_FROM_DATA_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload.error,
        };
      default:
        return state;
    }
  };
  
  export default removeItemReducer;
  