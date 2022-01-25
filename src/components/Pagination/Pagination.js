import React from 'react';
import './Pagination.scss';
import Button from './Button/Button';

const arrayButtons = [ `<`, 1, 2, 3, 4, 5, `>`];


const Pagination = ({ switchPage, currentPage }) => {
        return (
            <div className="pagination">
                {arrayButtons.map((element) => <Button key={element} contentKey={element} switchPage={switchPage} currentPage={currentPage}/>)}
            </div>
        );
}

export default Pagination;

