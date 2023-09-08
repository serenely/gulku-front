import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchUserDataLog } from '../../../api/userApi';
import { setError } from '../../actions/actions';
import { FETCH_USER_LOG } from '../../../utils/constants';
import { ApiResponseLog, UserLog} from '../../../utils/interface';

function setCookie(name: string, value: string, days: number) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function* fetchUserGenerator(action: any): Generator<any, void, ApiResponseLog<UserLog>> {
  try {
    const data: UserLog [] = action.payload;
    const responseData = yield call(fetchUserDataLog, data);
    console.log(responseData, ' responseData');

    setCookie('user', JSON.stringify(responseData), 7); 
  } catch (error) {
    const errorMessage = typeof error === 'string' ? error : 'An error occurred';
    yield put(setError(errorMessage));
  }
}

export function* fetchUserLogSaga() {
  yield takeLatest(FETCH_USER_LOG, fetchUserGenerator); 
}
