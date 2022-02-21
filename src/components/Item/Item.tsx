import React from 'react';
import {Button, StDescription, StInputCheckbox, StItem} from "src/components/Item/styled";
import {ThemeContext} from "src/context/ThemeContext";

type TProps = {
    title: string,
    deleteTask: (id: number) => void,
    completed: boolean,
    checkChange: (id: number) => void,
    id: number
};

const Item: React.FC<TProps> = ({title, deleteTask, completed, checkChange, id} ) => {
    const { dark } = React.useContext(ThemeContext);
    const handleChangeCheckbox = () => checkChange(id);
    const handlDeleteTask = () => deleteTask(id);
    return (
        <StItem checked={completed}>
            <StInputCheckbox onClick={handleChangeCheckbox} type="checkbox" checked={completed}/>
            <StDescription dark={dark}>{title}</StDescription>
            <Button onClick={handlDeleteTask} dark={dark}>Delete</Button>
        </StItem>
    );
};

export default Item;
