import { put, call } from "redux-saga/effects";
import * as Eff from "redux-saga/effects";
import axios from "axios";
import {
  actionsForStatus,
  postStatusObject,
  sendStatus,
} from "./../actions/statusAcrions";

const takeEvery: any = Eff.takeEvery;

async function getStatus() {
  return await axios
    .get("https://whispering-stream-97836.herokuapp.com/api/get/status")
    .then((res) => res.data[0].status);
}

async function setStatus(status: boolean) {
  return await axios
    .post("https://whispering-stream-97836.herokuapp.com/api/post/status", {
      status: status,
    })
    .then((res) => res.data);
}

function* workerGetStatus() {
  const status: boolean = yield call(getStatus);
  yield put(sendStatus(status));
}

function* workerPostStatus(status: postStatusObject) {
  const data: boolean = yield call(setStatus, status.payload);
  yield put(sendStatus(data));
}

export function* watchGetStatus() {
  yield takeEvery(actionsForStatus.GET_STATUS, workerGetStatus);
}

export function* watchPostStatus() {
  yield takeEvery(actionsForStatus.POST_STATUS, workerPostStatus);
}
