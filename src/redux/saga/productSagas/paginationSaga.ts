import { takeLatest, put } from 'redux-saga/effects';
import { setCurrentPage } from '../../actions/actions';
import { SET_CURRENT_PAGE } from '../../../utils/constants';

function* handlePageChange(action: any) {
  const { page } = action.payload;
  yield put(setCurrentPage(page));
}

export function* paginationSaga() {
  yield takeLatest(SET_CURRENT_PAGE, handlePageChange);
}