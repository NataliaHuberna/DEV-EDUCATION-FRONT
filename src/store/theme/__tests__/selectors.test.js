import {selectTheme} from '../selectors';

describe('selector', () => {
    it('should return correct selector', () => {
        const mockParameters = {notification: {}, todos:[{value: 'random Text', id: 1, checked: false}], theme: {dark: false}};
        const selected = selectTheme(mockParameters);
        expect(selected).toEqual(mockParameters.theme);
    });
});
