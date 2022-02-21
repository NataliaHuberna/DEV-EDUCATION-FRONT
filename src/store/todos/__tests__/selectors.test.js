import {selectTodos} from '../selectors';

describe('selector', () => {
    it('should return correct selector', () => {
        const mockParameters = {notification: {}, todos:[{value: 'random Text', id: 1, checked: false}]};
        const selected = selectTodos(mockParameters);
        expect(selected).toEqual(mockParameters.todos);
    });
});
