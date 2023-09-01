import { ADD_TO_CART, REMOVE_FROM_CART_SUCCESS, UPDATE_CART_FROM_LOCAL_STORAGE, UPDATE_CART_ITEM_QUANTITY } from '../../utils/constants';
import { Product } from '../../utils/interface';

interface CartState {
  cartItems: Product[];
  cartQuantity: number;
  isLoading: boolean;
}

const initialState: CartState = {
  cartItems: [],
  cartQuantity: 0,
  isLoading: false,
};

const cartReducer = (state = initialState, action: any): CartState => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
      case UPDATE_CART_FROM_LOCAL_STORAGE:
      return {
        ...state,
        cartItems: action.payload,
      };
      case UPDATE_CART_ITEM_QUANTITY:
        return {
          ...state,
          cartQuantity: action.payload,
        };
      case REMOVE_FROM_CART_SUCCESS:
        return {
          ...state,
        };
      default:
        return state;
  }
};

export default cartReducer;
