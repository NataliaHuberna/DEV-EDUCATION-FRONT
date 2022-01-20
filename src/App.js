import React, { Component } from 'react';
import './App.css';
import TaskInput from './components/TaskInput/TaskInput';
import List from './components/List/List';
import { API_URL } from './constants/constantsApi';
import axios from 'axios';
import Loader from './components/Loader/Loader';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            isLoading: '',
        };
    }

    componentDidMount() {
        this.getDataTasks();
    }

    showLoader = () => this.setState({ isLoading: true });

    hideLoader = () => this.setState({ isLoading: false });

    getDataTasks = async () => {
        try {
            this.showLoader();
            const { data } = await axios.get(`${API_URL}?_limit=7`);
            this.setState({ todos: data });
        } catch (error) {
            console.log(error);
        } finally {
            this.hideLoader();
        }
    };

    addTask = async (title) => {
        try {
            this.showLoader();
            const body = { title, id: Date.now(), completed: false };
            const { data } = await axios.post(API_URL, body);
            this.setState({ todos: [...this.state.todos, body] });
        } catch (error) {
            console.log(error);
        } finally {
            this.hideLoader();
        }
    };

    checkChange = (id) => {
        this.setState({
            todos: this.state.todos.map((element) =>
                element.id === id
                    ? { ...element, completed: !element.completed }
                    : element
            ),
        });
    };

    deleteTask = async (id) => {
        try {
            this.showLoader();
            const response = await axios.delete(`${API_URL}/${id}`);
            if (response.status === 200) {
                this.setState({todos: this.state.todos.filter((todo) => todo.id !== id)});
            }
        } catch (error) {
            console.log(error);
        } finally {
            this.hideLoader();
        }
    };

    render() {
        return (
            <div className="app">
                <div className="header">
                    <h1>ToDoList</h1>
                </div>
                <TaskInput addTask={this.addTask} />
                <h2>Tasks for day</h2>
                {this.state.isLoading
                    ? (<Loader />)
                    : this.state.todos.length
                        ?( <List
                            todos={this.state.todos}
                            checkChange={this.checkChange}
                            deleteTask={this.deleteTask}
                        />)
                        : (<h1>You have no tasks!</h1>)
                }
            </div>
        );
    }
}

export default App;
