import { takeLatest, put, call } from 'redux-saga/effects';
import { AxiosResponse } from 'axios'; 
import { REMOVE_FROM_CART, REMOVE_FROM_DATA } from '../../../utils/constants';
import { fetchProductDeleteData } from '../../../api/userApi';
import { removeFromDataFailure, removeFromDataSuccess } from '../../actions/actions';
import { ProductDeleteFailureAction, ProductDeleteSuccessAction } from '../../../utils/interface';

interface DeleteProductAction {
  type: typeof REMOVE_FROM_CART;
  payload: {
    productId: string;
    token: string;
  };
}

function* removeItem(action: DeleteProductAction) {
  try {
    const { productId, token } = action.payload;
    const response: AxiosResponse = yield call(
      fetchProductDeleteData,
      productId,
      token
    );

    if (response.status === 200) {
      yield put<ProductDeleteSuccessAction>(removeFromDataSuccess());
    } else {
      yield put<ProductDeleteFailureAction>(
        removeFromDataFailure('Ошибка при удалении продукта')
      );
    }
  } catch (error) {
    yield put<ProductDeleteFailureAction>(
        removeFromDataFailure('Ошибка при выполнении запроса')
    );
  }
}

export function* removeItemSaga() {
  yield takeLatest(REMOVE_FROM_DATA, removeItem);
}
