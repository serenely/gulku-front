import { put, takeEvery, call } from 'redux-saga/effects';
import { fetchProductsFailure, fetchProductsSuccess, startLoadingProducts, stopLoadingProducts } from '../actions/actions';
import { LOAD_PRODUCTS } from '../../utils/constants';
import { fetchProductsData } from '../../api/productsApi';

function* loadProductsSaga(): Generator<any, any, any>  {
  try {
    yield put(startLoadingProducts()); 

    const productsData = yield call(fetchProductsData); 
    yield put(fetchProductsSuccess(productsData));

    yield put(stopLoadingProducts());
  } catch (error) {
    if (typeof error === 'string') {
        yield put(fetchProductsFailure(error));
      } else {
        yield put(fetchProductsFailure('An error occurred'));
      }

    yield put(stopLoadingProducts()); 
  }
}

export function* loaderProducts() {
  yield takeEvery(LOAD_PRODUCTS, loadProductsSaga);
}
