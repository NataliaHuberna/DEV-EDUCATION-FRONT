import React,  { useState, useEffect } from 'react';
import {StDiv, StButton, StInput} from "./styled";
import {useDispatch} from 'react-redux';
import {addTodos} from '../../store/todos/actions';

const TaskInput = () => {
    const dispatch  = useDispatch();

    const addTask = (task) => {
        const newTask = {value: task, id: Date.now(), checked: false};
        dispatch(addTodos(newTask));
    };
    const inputRef = React.createRef();
    const[input, setInput] = useState('');

    useEffect(()=> inputRef.current.focus());

    const addTaskToList = () => {
        if (input.trim()) {
            addTask(input);
            setInput( '');
        }
    };

    const handleEnter = (event) => {if (event.key === 'Enter') addTaskToList();};
    const inputChange = (event) => setInput(event.target.value );

    return (
        <StDiv>
            <StInput
                ref={inputRef}
                onKeyPress={handleEnter}
                onChange={inputChange}
                value={input}
                placeholder="Add new task..."
            />
            <StButton disabled={!input.trim()} onClick={addTaskToList}>
                ADD
            </StButton>
        </StDiv>
    );
};

export default TaskInput;
