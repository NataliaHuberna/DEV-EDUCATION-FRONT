import React from 'react';
import {StDiv} from './styled';
import Item from '../Item/Item';
import {useSelector} from "react-redux";
import {selectTodos} from "../../store/todos/selectors";

const List = () => {
    const todos  = useSelector(selectTodos);
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
