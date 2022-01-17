import React, { Component } from 'react';
import Timer from '../Timer/Timer';

import './Box.css';

class Box extends Component {
    render() {
        return (
            <div className="center frosted-glass-effect">
                <h1>We are waiting for Happy New Year!</h1>
                <hr />
                <p id="demo"><Timer/></p>
            </div>
        );
    }
}

export default Box;
