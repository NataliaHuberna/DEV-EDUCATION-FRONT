import todos from '../reducer';
import {ADD_TODO, DELETE_TODO, CHECK_TODOS} from "../actionTypes";

describe('reducer', () => {
    it('should provide the initial state', () => {
        expect(todos(undefined, {})).toEqual([{value: 'task', id: 1, checked: false}]);
    });
    it('should handle ADD_TODO action', () => {
        expect(todos([], {type:ADD_TODO, payload: {value: 'random Text for Test', id: 2, checked: false}})).toEqual([{value: 'random Text for Test', id: 2, checked: false}]);
    });
    it('should handle DELETE_TODO action', () => {
        expect(todos([{value: 'random Text for Test', id: 2, checked: false}], {type:DELETE_TODO, payload: 2})).toEqual([]);
    });
    it('should handle CHECK_TODO action', () => {
        expect(todos([{value: 'random Text for Test', id: 2, checked: false}], {type:CHECK_TODOS, payload: 2})).toEqual([{value: 'random Text for Test', id: 2, checked: true}]);
    });
    it('should handle default action', () => {
        expect(todos([{value: 'random Text for Test', id: 2, checked: false}], {type:'default'})).toEqual([{value: 'random Text for Test', id: 2, checked: false}]);
    });
});
