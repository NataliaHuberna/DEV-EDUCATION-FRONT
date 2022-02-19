import React from 'react';
import Item from '../Item/Item';
import {StDiv} from "src/components/List/styled";
import {TTodo} from "src/types/types";

type TProps = {
    todos: Array<TTodo>,
    deleteTask: (id: number) => void,
    checkChange: (id: number) => void
};

const List: React.FC<TProps> = ({todos, deleteTask, checkChange}) => (
    <StDiv>
        {todos.map((el) => <Item
            title = {el.title}
            deleteTask={deleteTask}
            key = {el.id}
            id={el.id}
            completed = {el.completed}
            checkChange = {checkChange}/>
        )}
    </StDiv>
);

export default List;
