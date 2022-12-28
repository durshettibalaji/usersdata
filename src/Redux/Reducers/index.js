import { userArray } from "./reducers";
import { combineReducers } from "redux";
const reducers =combineReducers({
    obj:userArray,
});
export default reducers;