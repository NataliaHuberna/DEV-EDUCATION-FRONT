import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';


const Button = ({
    currentPage,       
    switchPage,
    contentKey,
}) => {
    const isDisabled = contentKey === `<` && currentPage === 1 || contentKey === `>` && currentPage === 5;
    const switchPageHandler = () => {
        if (isDisabled) return;
        let newPage = contentKey;
        if (contentKey === `<`) {
            newPage = currentPage - 1
        }
        if (contentKey === `>`) {
            newPage = currentPage + 1
        }
        switchPage(newPage)
    }
    return (
        <button 
            className={currentPage === contentKey ? "active" : ""}
            onClick = {switchPageHandler}
            disabled = {isDisabled}    
        >
            {contentKey}
        </button>
    );
};

Button.propTypes = {
    currentPage: PropTypes.number,    
    switchPage: PropTypes.func,
    contentKey: PropTypes.any.isRequired,
};

export default Button;