import React from 'react';
import './List.css';
import Item from '../Item/Item';

const List = ({todos, deleteTask, checkChange}) => (
    <div className="tasks">
        {todos.map((el) => <Item 
            taskText={el.value} 
            deleteTask={deleteTask} 
            key = {el.id} 
            id={el.id} 
            checked = {el.checked} 
            checkChange = {checkChange} />
            )}
        </div>
)

export default List;
