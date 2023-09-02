import { takeLatest, put, call } from "redux-saga/effects";
import { logoutSuccess } from "../actions/actions";
import { LOGOUT } from "../../utils/constants";

function* logoutUser() {
    const deleteCookie = (name: string) =>
     {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
  const deleteCartItems = (item: string) => localStorage.removeItem(item)
  deleteCartItems('cartItems')
  deleteCookie('user');
  yield put(logoutSuccess());
}

export function* logoutSaga() {
  yield takeLatest(LOGOUT, logoutUser);
}


  