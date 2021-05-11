import { combineReducers } from "redux";
import statusReduser from "./statusReduser";

const rootReducer = combineReducers({
  status: statusReduser,
});

export default rootReducer;
