import React from 'react';
import './Pagination.scss';

const Pagination = ({ switchPage }) => {
    const switchPageHandler = (e) => {switchPage(+e.target.dataset.number)}
        return (
            <div className="pagination">
                <button className="prev" disabled>&laquo;</button>
                <button onClick = {switchPageHandler} data-number="1" className = "active">1</button>
                <button onClick = {switchPageHandler} data-number="2">2</button>
                <button onClick = {switchPageHandler} data-number="3">3</button>
                <button onClick = {switchPageHandler} data-number="4">4</button>
                <button onClick = {switchPageHandler} data-number="5">5</button>
                <button className="next">&raquo;</button>
            </div>
        );
}

export default Pagination;
