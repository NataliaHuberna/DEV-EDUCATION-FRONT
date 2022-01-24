import React from 'react';
import './FullPicture.scss';

const FullPicture = ({ url, removeUrlFromState }) => (
    <div className="full-picture">
        <img src={url} id="fullPicture" alt="dog" />
        <span onClick={removeUrlFromState}>X</span>
    </div>
);

export default FullPicture;
