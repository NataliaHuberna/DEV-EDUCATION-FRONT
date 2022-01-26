import React from 'react';
import './Button.scss';

const Button = ({ contentKey, isDisabled, onClick}) => {
    return (
        <button
            onClick={onClick}
            disabled={isDisabled}
        >
            {contentKey}
        </button>
    );
};

export default Button;