import React from 'react';
import {StDiv} from './styled';
import Item from '../Item/Item';

const List = ({todos, deleteTask, checkChange}) => (
    <StDiv>
        {todos.map((el) => <Item 
            taskText={el.value} 
            deleteTask={deleteTask} 
            key = {el.id} 
            id={el.id} 
            checked = {el.checked} 
            checkChange = {checkChange} />
            )}
    </StDiv>
)

export default List;
