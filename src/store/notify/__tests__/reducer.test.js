import notify from '../reducer';
import {SHOW_NOTIFICATION, CLEAR_NOTIFICATION} from "../actionTypes";

describe('reducer', () => {
    it('should provide the initial state', () => {
        expect(notify(undefined, {})).toEqual({type: '', message: ''});
    });
    it('should handle SHOW_NOTIFICATION action', () => {
        expect(notify({type: '', message: ''}, {type:SHOW_NOTIFICATION, payload: {type: 'error', message: 'Test'}})).toEqual({type: 'error', message: 'Test'});
    });
    it('should handle CLEAR_NOTIFICATION action', () => {
        expect(notify({type: 'error', message: 'Test'}, {type:CLEAR_NOTIFICATION})).toEqual({type: '', message: ''});
    });
    it('should handle default action', () => {
        expect(notify({type: 'error', message: 'Test'}, {type:'default'})).toEqual({type: 'error', message: 'Test'});
    });
});
