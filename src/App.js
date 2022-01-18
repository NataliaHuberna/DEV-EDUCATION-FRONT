import React, { Component } from 'react';
import './App.css';
import TaskInput from './components/TaskInput/TaskInput';
import List from './components/List/List';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { todos: [] }
  }

  addTask = (task) => this.setState({ todos:[...this.state.todos, {value: task, id: Date.now(), checked: false}]});
  
  checkChange = (id) => {
    this.setState({ todos: this.state.todos.map(element => element.id === id ?{...element, checked: !element.checked} : element)});
  }

  deleteTask = (id) => this.setState({ todos: this.state.todos.filter(element => element.id !== id)});

  render() {
        return (
          <div className="App">
            <div className="header"><h1>ToDoList</h1></div>
              <TaskInput addTask={this.addTask}/>
              <List todos={this.state.todos} checkChange = {this.checkChange} deleteTask={this.deleteTask}/>  
          </div>
      )
  }
}

export default App;

