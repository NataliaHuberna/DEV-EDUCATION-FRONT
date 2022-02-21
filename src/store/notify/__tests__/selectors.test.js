import {selectNotify} from '../selectors';

describe('selector', () => {
    it('should return correct selector', () => {
        const mockParameters = {notify: {type:'success', message:'success'}, todos:[]};
        const selected = selectNotify(mockParameters);
        expect(selected).toEqual(mockParameters.notify);
    });
});
