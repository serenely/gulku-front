import { put, call, takeLatest } from 'redux-saga/effects';
import { fetchProductData } from '../../../api/productsApi';
import { fetchProductFailure, fetchProductSuccess } from '../../actions/actions';
import { FETCH_PRODUCT_REQUEST } from '../../../utils/constants';

interface FetchProductRequestAction {
  type: typeof FETCH_PRODUCT_REQUEST;
  payload: string;
}

function* getProductDataSaga(action: FetchProductRequestAction): Generator<any, any, any>  {
  const { payload: _id } = action;
  try {
    const productData = yield call(fetchProductData, _id);
    yield put(fetchProductSuccess(productData));
  } catch (error) {
    if (typeof error === 'string') {
      yield put(fetchProductFailure(error));
    } else {
      yield put(fetchProductFailure('An error occurred'));
    }
  }
}

export function* productSaga() {
  yield takeLatest(FETCH_PRODUCT_REQUEST, getProductDataSaga);
}
