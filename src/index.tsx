import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {GlobalStyles} from "src/GlobalStyles";
import {NotificationContextProvider} from "src/context/NotificationContext";
import {ThemeProvider} from "src/context/ThemeContext";

ReactDOM.render(
    <React.StrictMode>
        <NotificationContextProvider>
            <ThemeProvider>
                <GlobalStyles/>
                <App />
            </ThemeProvider>
        </NotificationContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
