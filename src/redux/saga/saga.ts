import { all } from 'redux-saga/effects';
import {  productSaga } from './productSaga';
import { productsSaga } from './productsSaga';
import { removeFromCartItem } from './removeFromCartSaga';
import { addToCart } from './addToCartSaga';
import { updateCartQuantity } from './updateCartQuantitySaga';
import { fetchUserSaga } from './userSaga';
import { logoutSaga } from './logoutSaga';

export function* rootSaga() {
  yield all([
    productsSaga(),
    productSaga(),
    addToCart(),
    removeFromCartItem(),
    updateCartQuantity(),
    fetchUserSaga(),
    logoutSaga(),
    ]);
}