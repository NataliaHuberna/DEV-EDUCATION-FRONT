import './Header.scss';
import React from 'react';

const Header = () => (
    <div className="header">
        <h1>Connect 4</h1>
        <div className="circles">
            <div className="circle red-sm"></div>
            <div className="circle yellow-sm"></div>
            <div className="circle red-sm"></div>
            <div className="circle yellow-sm"></div>
            <div className="circle red-sm"></div>
            <div className="circle yellow-sm"></div>
            <div className="circle red-sm"></div>
            <div className="circle yellow-sm"></div>
        </div>
    </div>
);

export default Header;
