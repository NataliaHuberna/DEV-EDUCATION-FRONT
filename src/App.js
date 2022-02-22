import React from 'react';
import {StButton, StDiv, StDivHeader, StH1} from "./styled";
import TaskInput from './components/TaskInput';
import List from './components/List';
import Notification from "./components/Notification";

const App = ({dark, changeTheme}) => {
    console.log(dark)
    return <StDiv dark={dark}>
        <StDivHeader><StH1>ToDoList</StH1></StDivHeader>
        <TaskInput />
        <h2>Tasks for day</h2>
        <List />
        <Notification/>
        <StButton dark={dark} onClick={changeTheme}>Change theme</StButton>
    </StDiv>;
};

export default App;

