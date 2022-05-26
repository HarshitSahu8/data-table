import { combineReducers } from "redux";
import dataTableData from "./slices/dataTableData";

const rootReducer = combineReducers({
  dataTableData,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
