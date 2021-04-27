import {

} from "./types.js";
import ImageAssets from "../../../assets";

const initialState = {
  data:[],
  sideMenuList: [
    { displayName: "Overview" },
    { displayName: "Leaderboard" },
    { displayName: "Spreadsheets" },
    { displayName: "Administration" },
    { displayName: "Sales" },
    { displayName: "Schedule" },
  ],
  ImageIs: [ImageAssets.setting],
  sideMenuTeamList:[
    { displayName: "Message" },
    { displayName: "Support" },
  ],
};

export const dashboardDataReducer = (state = initialState, action) => {
  switch (action.type) {
      // case SET_ERROR_MESSAGE:
      // return { ...state, error: action.payload };
    default:
      return { ...state };
  }
};
