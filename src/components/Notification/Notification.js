import React from 'react';
import {StNotification} from "./styled";
import {useDispatch, useSelector} from "react-redux";
import {clearNotification} from "../../store/notify/actions";
import {selectNotify} from "../../store/notify/selectors";

const Notification = () => {
    const dispatch = useDispatch();
    const {type, message} = useSelector(selectNotify);
    React.useEffect(() => {
        if (type)  {
            setTimeout(()=> {
                dispatch(clearNotification());
            }, 2000);}
    }, [type]);
    return type && (<StNotification isSuccess={type}><p> {message} </p></StNotification>);
};

export default Notification;
