import React from 'react';
import {StDiv} from './styled';
import Item from '../Item';

const List = ({todos}) => {
    return (
        <StDiv>
            {todos.map((el) => <Item
                taskText={el.value}
                key = {el.id}
                id={el.id}
                checked = {el.checked}/>
            )}
        </StDiv>
    );
};

export default List;
