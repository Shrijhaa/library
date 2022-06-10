import { combineReducers } from "redux";

// importing reducers
import userReducer from "./user/user.reducers";

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
