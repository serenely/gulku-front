import { SET_CURRENT_PAGE } from "../../../utils/constants";

const initialState = {
    currentPage: 1,
  };
  
  export const paginationReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case SET_CURRENT_PAGE:
        return {
          ...state,
          currentPage: action.payload,
        };
      default:
        return state;
    }
  };