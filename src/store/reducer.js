import {combineReducers} from "redux";
import notificationReducer from "./notify/reducer";
import todosReducer from "./todos/reducer";
import themeReducer from "./theme/reducer";

const rootReducer = combineReducers({
    todos: todosReducer,
    notify: notificationReducer,
    theme: themeReducer
});

export default rootReducer;
