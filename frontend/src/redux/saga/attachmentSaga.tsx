// githubSaga.js
import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  fetchDataFailure,
  fetchDataStart,
  fetchDataSuccess,
} from "./Slice.tsx";

function* fetchData() {
  try {
    const response = yield call(
      axios.get,
      "https://randomuser.me/api/?results=6"
    );
    console.log("API Response:", response.data);
    yield put(fetchDataSuccess(response.data));
  } catch (error) {
    yield put(fetchDataFailure(error.message));
  }
}

export function* watchFetchData() {
  yield takeEvery(fetchDataStart, fetchData);
}
