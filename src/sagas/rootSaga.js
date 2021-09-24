import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* submitData(payload) {
  try {
    let response = yield axios.post(
      "https://api.test.01cloud.dev/user/login",
      payload.data.payload,
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      yield put({ type: "REQUEST_SUCCESSFUL", data: response.data });
      payload.data.history.push("/home");
    } else {
      yield put({ type: "REQUEST_FAILURE" });
      alert(response.message ?? "login failed");
    }
  } catch (error) {
    yield put({ type: "REQUEST_FAILURE" });
    alert("Invalid credentials");
  }
}

function* watcherSaga() {
  yield takeLatest("REQUEST_SUBMIT", submitData);
}

export default watcherSaga;
