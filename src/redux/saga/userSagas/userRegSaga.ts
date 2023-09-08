import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchUserDataReg } from '../../../api/userApi';
import { setError } from '../../actions/actions';
import { FETCH_USER } from '../../../utils/constants';
import { ApiResponseReg, UserReg } from '../../../utils/interface';

function setCookie(name: string, value: string, days: number) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function* fetchUserGenerator(action: any): Generator<any, void, ApiResponseReg<UserReg>> {
  try {
    const data: UserReg [] = action.payload;
    const responseData = yield call(fetchUserDataReg, data);
    
    setCookie('user', JSON.stringify(responseData), 7); 
  } catch (error) {
    const errorMessage = typeof error === 'string' ? error : 'An error occurred';
    yield put(setError(errorMessage));
  }
}

export function* fetchUserSaga() {
  yield takeLatest(FETCH_USER, fetchUserGenerator); 
}
