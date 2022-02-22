import React, {useState} from "react";

type TProps = {
    children: React.ReactNode
};

type TShow = {
    type: string,
    message: string
};

const NotificationContext = React.createContext (null);

const NotificationContextProvider: React.FC<TProps> = ({children}) => {
    const [state, setState] = useState ({
        type: '',
        message: '',
    });

    const showNotification = ({type, message}: TShow) => {
        setState({type, message});
        setTimeout(clearNotification, 3000);
    };

    const clearNotification = () => {
        setState({
            type: '',
            message: '',
        });
    };

    return (
        <NotificationContext.Provider value={ {notification: {...state}, showNotification }}>
            {children}
        </NotificationContext.Provider>
    );
};

export {NotificationContextProvider, NotificationContext};
