import React, { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput/TaskInput';
import List from './components/List/List';
import Header from "src/components/Header/Header";
import MainLoader from "src/components/Loader/MainLoader";
import axios from 'axios';
import {API_URL} from "src/constants/API";
import {StButton, StDiv, StH2} from "src/styled";
import Notification from "src/components/Notification/Notification";
import {NotificationContext} from "src/context/NotificationContext";
import {ThemeContext} from "src/context/ThemeContext";

const App = () => {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getDataTasks();
    },[]);

    const { dark, toggleDark} = React.useContext(ThemeContext);
    const {notification, showNotification} = React.useContext(NotificationContext);

    const showLoader = () => setIsLoading(true);
    const hideLoader = () => setIsLoading(false);

    const getDataTasks = async () => {
        try {
            showLoader();
            const { data } = await axios.get(`${API_URL}?_limit=7`);
            setTodos( data );
        } catch (error) {
            return false;
        } finally {
            hideLoader();
        }
    };

    const addTask = async (title: string) => {
        try {
            showLoader();
            const body = { title, id: Date.now(), completed: false };
            await axios.post(API_URL, body);
            showNotification({type: "success", message: `Task ${title} was added successfully`});
            setTodos( [...todos, body]);
        } catch (error) {
            showNotification({type: "fail", message: `Task was not added`});
            return false;
        } finally {
            hideLoader();
        }
    };

    const checkChange = (id: number) => {setTodos(todos.map((element) =>
        element.id === id
            ? { ...element, completed: !element.completed }
            : element
    ));};

    const deleteTask = async (id: number) => {
        try {
            showLoader();
            await axios.delete(`${API_URL}/${id}`);
            showNotification({type: "success", message: `Task was deleted successfully`});
            setTodos(todos.filter((todo) => todo.id !== id));
        } catch (error) {
            showNotification({type: "fail", message: `Task was not deleted`});
            return false;
        } finally {
            hideLoader();
        }
    };
    const handleClickToggle = () => toggleDark(dark);

    return (
        <>
            { notification.type && <Notification message={notification.message} type={notification.type} />}
            <StDiv dark={dark}>
                <Header/>
                <TaskInput addTask={addTask} />
                <StH2>Tasks for day</StH2>
                {isLoading
                    ? (<MainLoader />)
                    : todos.length
                        ? ( <List todos={todos} checkChange={checkChange} deleteTask={deleteTask}/>)
                        : (<h1>You have no tasks!</h1>)
                }
                <StButton dark={dark} onClick={handleClickToggle}>Change theme</StButton>
            </StDiv>
        </>

    );
};

export default App;
