import React, { Component } from 'react';

// import './Button.scss';

const Button = ({ type = 'button', className, onClick, contentKey, style }) => {
    const btnClasses = ['button'];

    if (className) {
        btnClasses.push(className);
    }
    return (
        <button className={btnClasses.join(' ')} style={style} type={type} onClick={onClick}>
            {contentKey}
        </button>
    );
};

export default Button;
