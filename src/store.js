import { combineReducers,legacy_createStore } from "redux";
import studentReducer from "./redux/reducer/studendReducer";
import cartReducer from "./redux/reducer/cartReducer";

const reducers=combineReducers({
    cart:cartReducer,
    student:studentReducer
})
const store=legacy_createStore(reducers)
export default store