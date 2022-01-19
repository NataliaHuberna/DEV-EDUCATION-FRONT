import React from 'react';
import './App.css'; 
import Timer from '../Timer/Timer';

const App = () => {
    return (
        <>
        <div className="snowContainer"></div>
        <div className="center frosted-glass-effect">
            <h1>We are waiting for Happy New Year!</h1>
            <hr />
            <p id="demo">
            <Timer />
            </p>
        </div>
        </>
    );
}

export default App;
