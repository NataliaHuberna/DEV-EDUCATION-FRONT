import React from 'react';
import {StItem, StDescription, Button, StInputCheckbox} from "./styled";

const Item = ({taskText, checked, id, checkTodo, deleteTodo, showNotification}) => {
    const changeChecked = () => {
        checkTodo(id);
        showNotification({message: 'Todo was checked'});
    };

    const handleDeleteTodo = () =>{
        deleteTodo(id);
        showNotification({message: 'Todo was deleted'});
    };

    return (
        <StItem checked={checked}>
            <StInputCheckbox onChange={changeChecked} type="checkbox" checked={checked}/>
            <StDescription>{taskText}</StDescription>
            <Button onClick={handleDeleteTodo} className="btn-delete">Delete</Button>
        </StItem>
    );
};
    
export default Item;
