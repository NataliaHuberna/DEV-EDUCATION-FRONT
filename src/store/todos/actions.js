import {ADD_TODO, DELETE_TODO, CHECK_TODOS} from "./actionTypes";

export const addTodos = (todo) =>({type: ADD_TODO, payload: todo});
export const checkTodo = (id) => ({type: CHECK_TODOS, payload: id});
export const deleteTodo = (id) => ({type: DELETE_TODO, payload: id});