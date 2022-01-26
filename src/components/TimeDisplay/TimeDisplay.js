import React from 'react';

import './TimeDisplay.scss';

const TimeDisplay = ({ time }) => {
    return (
        <div className="TimeDisplay">
            <p>
            {Math.floor(time / 60)}:
            {Math.floor(time % 60) < 10
                ? '0' + Math.floor(time % 60)
                : Math.floor(time % 60)}
            </p>
        </div>
    );
};

export default TimeDisplay;
