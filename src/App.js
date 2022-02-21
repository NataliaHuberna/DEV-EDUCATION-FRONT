import React from 'react';
import {StButton, StDiv, StDivHeader, StH1} from "./styled";
import TaskInput from './components/TaskInput/TaskInput';
import List from './components/List/List';
import Notification from "./components/Notification/Notification";
import {useDispatch, useSelector} from "react-redux";
import {changeTheme} from "./store/theme/actions";
import {selectTheme} from "./store/theme/selectors";


const App = () => {
    const dispatch = useDispatch();
    const handleClick = () => dispatch(changeTheme());
    const {dark} = useSelector(selectTheme);
    return <StDiv dark={dark}>
        <StDivHeader><StH1>ToDoList</StH1></StDivHeader>
        <TaskInput />
        <h2>Tasks for day</h2>
        <List />
        <Notification/>
        <StButton dark={dark} onClick={handleClick}>Change theme</StButton>
    </StDiv>;
};

export default App;

