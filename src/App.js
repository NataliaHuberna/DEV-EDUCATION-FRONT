import React, { useState } from 'react';
import {StDiv, StDivHeader, StH1} from "./styled";
import TaskInput from './components/TaskInput/TaskInput';
import List from './components/List/List';

const App = () => {
    const [todos, setTodos] = useState([]);

    const addTask = (task) => setTodos([...todos, {value: task, id: Date.now(), checked: false}]);

    const checkChange = (id) => {
        setTodos(todos.map(element => element.id === id ?{...element, checked: !element.checked} : element));
    }

    const deleteTask = (id) => setTodos(todos.filter(element => element.id !== id));

        return (
              <StDiv>
                    <StDivHeader><StH1>ToDoList</StH1></StDivHeader>
                    <TaskInput addTask={addTask} />
                    <h2>Tasks for day</h2>
                    <List todos={todos} checkChange = {checkChange} deleteTask={deleteTask}/>
              </StDiv>
      )
}

export default App;

