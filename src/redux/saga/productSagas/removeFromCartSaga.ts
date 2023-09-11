import { put, takeEvery, select } from "redux-saga/effects";
import { removeFromCartSuccess } from "../../actions/actions";
import { REMOVE_FROM_CART } from "../../../utils/constants";
import { Product } from "../../../utils/interface";
import { RootState } from "../../store";

function* handleRemoveFromCart(action: { type: string, payload: string }) { 
  try {
  const cartItems: Product[] = yield select((state: RootState) => state.cart.cartItems);
  const updatedCartItems = cartItems.filter(item => item._id !== action.payload);
  localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  
  yield put(removeFromCartSuccess(updatedCartItems));

  } catch(error){
    console.log(error);
  }
}

export function* removeFromCartItem() {
  yield takeEvery(REMOVE_FROM_CART, handleRemoveFromCart);
}
