import React from 'react';
import './Item.css';

const Item = ({taskText, deleteTask, checked, checkChange, id} ) => {
    const handleChangeCheckbox = () => checkChange(id);
    const handlDeleteTask = () => deleteTask(id);
    return (
        <div className={checked ? "item checked" : "item"}>
            <div className="description">{taskText}</div>
            <div className="buttons">
                <input onClick={handleChangeCheckbox} className="btn-complete" type="checkbox"/>
                <button onClick={handlDeleteTask} className="btn-delete">Delete</button>
            </div>
        </div>
    )
}
    
export default Item;
