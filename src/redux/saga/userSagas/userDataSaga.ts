import { takeLatest, put, call } from 'redux-saga/effects';
import { fetchUserData } from '../../../api/userApi';
import { getUserDataSuccess, getUserDataFailure, setUser } from '../../actions/actions';
import { FETCH_USER_DATA_REQUEST } from '../../../utils/constants';
import { UserReg } from '../../../utils/interface';

interface ApiResponse {
  ok: boolean;
  data?: any; 
}

function getCookie(name: string): string | undefined {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return decodeURIComponent(parts.pop()!.split(';').shift()!);
}

function* fetchUserDataAuth() {
  try {
    const userCookie = getCookie('user');

    if (userCookie) {
      const UserReg: UserReg = JSON.parse(userCookie);
      yield put(setUser(UserReg)); 

      const _id = UserReg._id;
      const token = UserReg.token;

      const response: ApiResponse = yield call(fetchUserData, _id, token);
                
      if (response.ok) {
        yield put(getUserDataSuccess(response.data));
      } else {
        yield put(getUserDataFailure('Ошибка при выполнении запроса'));
      }
    } else {
      console.error('Куки "user" не найдены');
    }
  } catch (error) {
    yield put(getUserDataFailure('Ошибка при выполнении запроса'));
  }
}

export function* fetchUserDataSaga() {
  yield takeLatest(FETCH_USER_DATA_REQUEST, fetchUserDataAuth);
}
