import { put, takeEvery } from "redux-saga/effects";
import {} from "./types";
import {} from "./actions.js";
import { } from "./api";

//ADD NEW STUDENT..............................
// function* addNewStudentHandler(action) {
//   try {
//     const { payload } = action;
//     //api
//     const response = yield addNewStundents(payload);
//     if (response) {
//       yield put(
//         getStudents({
//           successMessage: "New studentAdded Successfully",
//           successMessageToShow:"New studentAdded Successfully"
//         })
//       );
//     } else {
//       yield put(
//         setErrorMessageAction({
//           message: response.message,
//           severity: SEVERITY_TYPES.ERROR,
//         })
//       );
//     }
//   } catch (error) {
//     throw error;
//   }
// }

export default function* watchAuth() {
  // yield takeEvery(ADD_NEW_SAGA,addNewStudentHandler);
}
