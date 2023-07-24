import count_reducer from "./count";
import person_reducer from "./person";
import { combineReducers } from "redux";
export default combineReducers({
    count:count_reducer,
    person:person_reducer
})