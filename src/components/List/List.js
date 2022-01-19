import React from 'react';
import './List.css';
import Item from '../Item/Item';

const List = ({todos, deleteTask, checkChange}) => (
    <div className="tasks">
        {todos.map((el) => <Item 
            title = {el.title} 
            deleteTask={deleteTask} 
            key = {el.id} 
            id={el.id} 
            completed = {el.completed} 
            checkChange = {checkChange} />
            )}
        </div>
)

export default List;
