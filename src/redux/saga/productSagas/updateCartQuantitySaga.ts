import { put, takeEvery } from 'redux-saga/effects';
import {ADD_TO_CART, LOAD_PRODUCTS_FROM_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM_QUANTITY} from '../../../utils/constants';

function* updateCartQuantitySaga(): Generator<any, void, any> {
  try {
    const localStrg = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const totalQuantity = localStrg.length
    yield put({ type: UPDATE_CART_ITEM_QUANTITY, payload: totalQuantity });
  } catch (error) {
    console.log(error);
  }
}

export function* updateCartQuantity() {
  yield takeEvery([ADD_TO_CART, REMOVE_FROM_CART, LOAD_PRODUCTS_FROM_CART], updateCartQuantitySaga);
}

