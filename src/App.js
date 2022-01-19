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


//   setDataTasks = (tasks) => this.setState({ todos: tasks });

  getDataTasks = async () => {
    try {
      this.showLoader();
      const {data} = await axios.get(API_URL);
      this.setState({ todos: data });
    } catch (error) {
      console.log(error);
    } finally {
      this.hideLoader();  
    }
  };

  addTask = (task) =>
    this.setState({
      todos: [
        ...this.state.todos,
        { title: task, id: Date.now(), completed: false },
      ],
    });

  checkChange = (id) => {
    this.setState({
      todos: this.state.todos.map((element) =>
        element.id === id ? { ...element, completed: !element.completed } : element
      ),
    });
  };

  deleteTask = (id) =>
    this.setState({
      todos: this.state.todos.filter((element) => element.id !== id),
    });

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>ToDoList</h1>
        </div>
        <TaskInput addTask={this.addTask} />
        <h2>Tasks for day</h2>
        {this.state.isLoading ?
            <Loader /> : this.state.todos.length ?
            <List
            todos={this.state.todos}
            checkChange={this.checkChange}
            deleteTask={this.deleteTask}
            /> : <h1>You have no tasks!</h1>}
      </div>
    );
  }
}

export default App;

