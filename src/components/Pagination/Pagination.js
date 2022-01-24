import React, { Component } from 'react';
import './Pagination.scss';

class Pagination extends Component {
    state = {
        
    }

    render() {
        return (
            <div className="pagination">
                <button className="prev" disabled>&laquo;</button>
                <button data-number="1" className = "active">1</button>
                <button data-number="2">2</button>
                <button data-number="3">3</button>
                <button data-number="4">4</button>
                <button data-number="5">5</button>
                <button className="next">&raquo;</button>
            </div>
        );
    }
}

export default Pagination;
