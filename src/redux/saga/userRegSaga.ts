import {  call, put, takeLatest } from 'redux-saga/effects';
import { fetchUserData } from '../../api/userApi';
import { setError } from '../actions/actions';
import { FETCH_USER } from '../../utils/constants';
import { ApiResponse, UserReg } from '../../utils/interface';

function setCookie(name: string, value: string, days: number) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function* fetchUserGenerator(action: any): Generator<any, void, ApiResponse<UserReg>> {
  try {
    const data: UserReg [] = action.payload;
    setCookie('user', JSON.stringify(data), 7); 
    yield call(fetchUserData, data);
  } catch (error) {
    const errorMessage = typeof error === 'string' ? error : 'An error occurred';
    yield put(setError(errorMessage));
  }
}

export function* fetchUserSaga() {
  yield takeLatest(FETCH_USER, fetchUserGenerator); 
}
