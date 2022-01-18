import React, { Component } from 'react';

import './TaskInput.css';

class TaskInput extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      input: '',
    };
  }

  componentDidMount() {
    this.myRef.current.focus();
  }

  addTask = () => {
    const { input } = this.state;
    if (input.trim()) {
      this.props.addTask(input);
      this.setState({ input: '' });
    }
  };

  handleEnter = (event) => {
    if (event.key === 'Enter') this.addTask();
  };

  inputChange = (event) => this.setState({ input: event.target.value });

  render() {
    return (
      <div className="task-input">
        <input
          ref={this.myRef}
          onKeyPress={this.handleEnter}
          onChange={this.inputChange}
          value={this.state.input}
          placeholder="Add new task..."
        ></input>
        <button disabled={!this.state.input.trim()} onClick={this.addTask}>
          ADD
        </button>
      </div>
    );
  }
}

export default TaskInput;
