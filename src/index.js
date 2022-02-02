import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {GlobalStyle} from "./globalStyles";

ReactDOM.render(
  <React.StrictMode>
      <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
