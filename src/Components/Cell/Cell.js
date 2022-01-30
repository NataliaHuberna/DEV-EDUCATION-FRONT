import './Cell.scss';
import React from 'react';
import { toggleClassName } from '../../helpers/toggleClassName';

const Cell = ({ value, columnIndex, play }) => {
    let colorName = toggleClassName(value);
    const handlClick = () => play(columnIndex);
    return (
        <td>
            <div className="cell" onClick={handlClick}>
                <div className={colorName}></div>
            </div>
        </td>
    );
};

export default Cell;
