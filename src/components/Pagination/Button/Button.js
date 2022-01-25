import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({    
    className,
    switchPageHandler,
    contentKey,
}) => {
    return (
        <button
            className={btnClasses.join(' ')}
            type={type}
            onClick={onClick}
        >
            {contentKey}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.oneOf(['button', 'submit']),
    className: PropTypes.string,
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func,
    contentKey: PropTypes.string.isRequired,
};

export default Button;