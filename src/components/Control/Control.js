import React from 'react';
import Button from '../Common/Buttons/Button';
import './Control.scss';

const Control = ({ stopTimer, startTimer, resetTime, handleTick, isTick, zero}) => {
    return (
        <div className="Control">
            <Button
                onClick={stopTimer}
                isDisabled={!isTick || !zero}
                handleTick={handleTick}
                isTick={isTick}
                contentKey="stop"
            />
            <Button
                onClick={startTimer}
                isDisabled={isTick || !zero}
                handleTick={handleTick}
                isTick={isTick}
                contentKey="start"
            />
            <Button
                onClick={resetTime}
                isDisabled={!zero}
                contentKey="reset"
            />
        </div>
    );
    
};


export default Control;
