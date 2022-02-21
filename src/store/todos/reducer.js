import {ADD_TODO, DELETE_TODO, CHECK_TODOS} from "./actionTypes";
const initialState = [{value: 'task', id: 1, checked: false}];

const todosReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ADD_TODO:
            return [...state, payload];
        case DELETE_TODO:
            return state.filter(element => element.id !== payload);
        case CHECK_TODOS:
            return state.map(element => element.id === payload ?{...element, checked: !element.checked} : element);
        default:
            return state;
    }
};

export default todosReducer;
