import {CLEAR_NOTIFICATION, SHOW_NOTIFICATION} from "./actionTypes";
const initialState = {type: '', message: ''};

const notificationReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SHOW_NOTIFICATION:
            return {...payload, type: payload.type || 'success'};
        case CLEAR_NOTIFICATION:
            return {type: '', message: ''};
        default:
            return state;
    }
};

export default notificationReducer;
