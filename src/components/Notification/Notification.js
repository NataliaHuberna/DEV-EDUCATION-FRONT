import React from 'react';
import {StNotification} from "./styled";

const Notification = ({clearNotification, notify}) => {
    const {type, message} = notify;
    console.log(notify)
    React.useEffect(() => {
        if (type)  {
            setTimeout(()=> {
                clearNotification();
            }, 2000);}
    }, [type]);
    return type && (<StNotification isSuccess={type}><p> {message} </p></StNotification>);
};

export default Notification;
