import './Button.scss';
import React from 'react';

const Button = ({ initBoard, contentKey }) => (
    <div className="button" onClick={initBoard}>
        {contentKey}
    </div>
);

export default Button;
