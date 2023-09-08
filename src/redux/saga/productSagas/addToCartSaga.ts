import { put, takeLatest } from 'redux-saga/effects';
import { addToCartFailure, addToCartSuccess } from '../../actions/actions';
import { ADD_TO_CART } from '../../../utils/constants';

function* addToCartSaga(action: any) {
  try {
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const updatedCart = [...cartItems, action.payload];
    localStorage.setItem('cartItems', JSON.stringify(updatedCart)); 
      
      yield put(addToCartSuccess(updatedCart));

  } catch (error: any) {
        yield put(addToCartFailure(error.message)); 
      } 
}

export function* addToCart() {
  yield takeLatest(ADD_TO_CART, addToCartSaga);
}
