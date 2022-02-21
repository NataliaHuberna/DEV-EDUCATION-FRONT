import {CLEAR_NOTIFICATION, SHOW_NOTIFICATION} from "./actionTypes";

export const showNotification = (notify) =>({type: SHOW_NOTIFICATION, payload: notify});
export const clearNotification = () => ({type: CLEAR_NOTIFICATION});
