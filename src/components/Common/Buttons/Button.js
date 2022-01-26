import React from 'react';
import './Button.scss';

const Button = ({ contentKey, isDisabled, onClick, handleTick, isTick }) => {
    const handleClick = () => {
        onClick();
        handleTick(isTick);
    }

    return (
        <button
            onClick={handleClick}
            disabled={isDisabled}
        >
            {contentKey}
        </button>
    );
};

export default Button;