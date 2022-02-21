import themeReducer from "../reducer";
import {CHANGE_THEME } from "../actionTypes";

themeReducer

describe('reducer', () => {
    it('should provide the initial state', () => {
        expect(themeReducer(undefined, {})).toEqual({dark: false});
    });
    
    it('should handle CHANGE_THEME action', () => {
        expect(themeReducer({}, {type: CHANGE_THEME})).toEqual({dark: true});
    });
    
    it('should handle default action', () => {
        expect(themeReducer({dark: true}, {type:'default'})).toEqual({dark: true});
    });
});
