import { all } from "redux-saga/effects";
import { watchGetStatus, watchPostStatus } from "./statusSaga";

export function* rootSaga() {
  yield all([watchGetStatus(), watchPostStatus()]);
}
