import { all } from 'redux-saga/effects';
import { productSaga } from './productSagas/productSaga';
import { productsSaga } from './productSagas/productsSaga';
import { removeFromCartItem } from './productSagas/removeFromCartSaga';
import { addToCart } from './productSagas/addToCartSaga';
import { updateCartQuantity } from './productSagas/updateCartQuantitySaga';
import { fetchUserSaga } from './userSagas/userRegSaga';
import { logoutSaga } from './userSagas/logoutSaga';
import { fetchUserLogSaga } from './userSagas/userLogSaga';
import { fetchUserDataSaga } from './userSagas/userDataSaga';
import { removeItemSaga } from './userSagas/removeItemSaga';

export function* rootSaga() {
  yield all([
    productsSaga(),
    productSaga(),
    addToCart(),
    removeFromCartItem(),
    updateCartQuantity(),
    fetchUserSaga(),
    logoutSaga(),
    fetchUserLogSaga(),
    fetchUserDataSaga(),
    removeItemSaga(),
    ]);
}