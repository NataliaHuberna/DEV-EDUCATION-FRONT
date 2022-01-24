import React from 'react';
import './Picture.scss';

const Picture = ({ url, setUrlToState }) => (
  <div className="picture" onClick={setUrlToState}>
    <div className="picture__cover__inner">
      <img src= {url} alt="dog" className="picture__cover" />
    </div>
  </div>
);

export default Picture;
