import React from 'react';
import {StDiv, StDivHeader, StH1} from "./styled";
import TaskInput from './components/TaskInput/TaskInput';
import List from './components/List/List';
import Notification from "./components/Notification/Notification";


const App = () => (
    <StDiv>
        <StDivHeader><StH1>ToDoList</StH1></StDivHeader>
        <TaskInput />
        <h2>Tasks for day</h2>
        <List />
        <Notification/>
    </StDiv>
);

export default App;

