import React from 'react';
import './Pagination.scss';

const Pagination = ({ switchPage, currentPage }) => {
    const switchPageHandler = (e) => {switchPage(+e.target.dataset.number)}
        return (
            <div className="pagination">
                <button className="prev" disabled = {currentPage === 1 ? "disabled" : false}>&laquo;</button>
                <button onClick = {switchPageHandler} data-number="1" className={currentPage === 1 ? "active" : ""}>1</button>
                <button onClick = {switchPageHandler} data-number="2" className={currentPage === 2 ? "active" : ""}>2</button>
                <button onClick = {switchPageHandler} data-number="3" className={currentPage === 3 ? "active" : ""}>3</button>
                <button onClick = {switchPageHandler} data-number="4" className={currentPage === 4 ? "active" : ""}>4</button>
                <button onClick = {switchPageHandler} data-number="5" className={currentPage === 5 ? "active" : ""}>5</button>
                <button className="next" disabled = {currentPage === 5 ? "disabled" : false}>&raquo;</button>
            </div>
        );
}

export default Pagination;

const array = new Array(6).map
