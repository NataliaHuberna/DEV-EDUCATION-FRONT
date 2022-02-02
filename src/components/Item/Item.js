import React from 'react';
import {StItem, StDescription, Button, StInputCheckbox} from "./styled";

const Item = ({taskText, deleteTask, checked, checkChange, id} ) => {
    const handleChangeCheckbox = () => checkChange(id);
    const handlDeleteTask = () => deleteTask(id);
    return (
        <StItem checked={checked}>
            <StInputCheckbox onClick={handleChangeCheckbox} type="checkbox" checked={checked}/>
            <StDescription>{taskText}</StDescription>
            <Button onClick={handlDeleteTask} className="btn-delete">Delete</Button>
        </StItem>
    )
}
    
export default Item;
