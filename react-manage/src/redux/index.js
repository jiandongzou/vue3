import user from "./modules/user/reducer"
import menu from "./modules/menu/reducer"
import { combineReducers } from "redux";
import {legacy_createStore as createStore,applyMiddleware} from "redux"
// 引入 redux-thunk，用于支持异步 action
import thunk from 'redux-thunk'



const reducer=combineReducers({
    user,
    menu
})
const store=createStore(reducer,applyMiddleware(thunk))
export default store
