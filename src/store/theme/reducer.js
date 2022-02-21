import {CHANGE_THEME} from "./actionTypes";

const initialState = {dark: false};

const themeReducer = (state = initialState, { type }) => {
    switch (type) {
        case CHANGE_THEME:
            return {dark: !state.dark};
        default:
            return state;
    }
};

export default themeReducer;
