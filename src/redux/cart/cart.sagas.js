import { all, call, takeLatest, put, takeEvery } from "redux-saga/effects";
import UserActionTypes from "../user/user.types";
import { clearCart } from "./cart.actions";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeEvery(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([onSignOutSuccess()]);
}
