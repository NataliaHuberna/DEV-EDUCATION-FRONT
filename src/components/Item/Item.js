import React from 'react';
import {StItem, StDescription, Button, StInputCheckbox} from "./styled";
import {useDispatch } from "react-redux";
import {checkTodo, deleteTodo} from "../../store/todos/actions";
import {showNotification} from "../../store/notify/actions";

const Item = ({taskText, checked, id} ) => {
    const dispatch  = useDispatch();

    const changeChecked = () => {
        dispatch(checkTodo(id));
        dispatch(showNotification({message: 'Todo was checked'}));
    };

    const handleDeleteTodo = () =>{
        dispatch(deleteTodo(id));
        dispatch(showNotification({message: 'Todo was deleted'}));
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
