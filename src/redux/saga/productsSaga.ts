import { put, call, takeLatest } from 'redux-saga/effects';
import { fetchProductsData } from '../../api/productsApi'; 
import { FETCH_PRODUCTS_REQUEST } from '../../utils/constants';
import { fetchProductsFailure, fetchProductsSuccess } from '../actions/actions';

function* getProductsDataSaga(): Generator<any, any, any>  { //разобраться для чего тут any, можно ли изменить
  try {
    const productsData = yield call(fetchProductsData); // Вызов функции для запроса данных
    yield put(fetchProductsSuccess(productsData));

  } catch (error) {
    if (typeof error === 'string') {
        yield put(fetchProductsFailure(error));
      } else {
        yield put(fetchProductsFailure('An error occurred'));
      }
    }
}


export function* productsSaga() {
  yield takeLatest(FETCH_PRODUCTS_REQUEST, getProductsDataSaga);
}


