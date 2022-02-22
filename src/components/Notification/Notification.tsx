import React from 'react';
import {StNotification} from "src/components/Notification/styled";

type TProps = {
    type: string,
    message: string
};

const Notification: React.FC<TProps> = ({message, type}) => {
    return (
        <StNotification isSuccess={type === "success"}>
            <p>{message}</p>
        </StNotification>
    );
};

export default Notification;
