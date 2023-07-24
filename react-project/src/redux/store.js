import {legacy_createStore as createStore,applyMiddleware} from "redux"
import reducer from "./reducer/index"
// 引入 redux-thunk，用于支持异步 action
import thunk from 'redux-thunk'
const store=createStore(reducer,applyMiddleware(thunk))
export default store