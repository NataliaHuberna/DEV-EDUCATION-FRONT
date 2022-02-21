import {combineReducers} from "redux";
import notificationReducer from "./notify/reducer";
import todosReducer from "./todos/reducer";

const rootReducer = combineReducers({
    todos: todosReducer,
    notify: notificationReducer
});

export default rootReducer;
