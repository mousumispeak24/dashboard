import { all } from "redux-saga/effects";
import dashboardSaga from "../containers/dashboard/state/sagas";
export default function* rootSaga() {
  yield all([dashboardSaga()] );
}
