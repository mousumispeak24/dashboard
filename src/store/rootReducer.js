import { combineReducers } from "redux";
import { dashboardDataReducer } from "../containers/dashboard/state/reducers";
export const rootReducer = combineReducers({
  dash: dashboardDataReducer,
});
