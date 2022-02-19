import React, {useState, useEffect} from 'react';
import {StButton, StDiv, StInput} from "src/components/TaskInput/styled";
import {ThemeContext} from "src/context/ThemeContext";

type TProps = {
    addTask: (input: string) => void
};

const TaskInput: React.FC<TProps> = ({addTask}) => {
    const inputRef: React.RefObject<HTMLInputElement> = React.createRef();
    const[input, setInput] = useState('');
    const { dark } = React.useContext(ThemeContext);

    useEffect(() => {
        inputRef.current.focus();
    },[]);

    const addTaskToList = () => {
        if (input.trim()) {
            addTask(input);
            setInput('');
        }
    };

    const handleEnter = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') addTaskToList();
    };

    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => setInput( event.target.value );
    return (
        <StDiv>
            <StInput
                ref={inputRef}
                onKeyPress={handleEnter}
                onChange={inputChange}
                value={input}
                placeholder="Add new task..."
            />
            <StButton isDisabled={!input.trim()} onClick={addTaskToList} dark={dark}>
                ADD
            </StButton>
        </StDiv>
    );
};

export default TaskInput;
