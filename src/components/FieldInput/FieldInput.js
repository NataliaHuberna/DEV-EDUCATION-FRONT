import React, { Component } from 'react';
import Button from '../Common/Buttons/Button';
import './FieldInput.scss';

class FieldInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
        };
    }

    setTime = () => {
        const { input } = this.state;
        if (input.trim()) {
        this.props.setTime(input);
        this.setState({ input: '' });
        }
    };

    handleEnter = (event) => {
        if (event.key === 'Enter') this.setTime();
    };

    inputChange = (event) => this.setState({ input: event.target.value.replace(/[^\d]/g, '') });

    render() {
        return (
            <div className="field-input">
                <div className="task-input">
                <input
                    type="text"
                    onKeyPress={this.handleEnter}
                    onChange={this.inputChange}
                    value={this.state.input}
                    placeholder="Your time..."
                ></input>
                </div>
                <Button contentKey={'set'} onClick={this.setTime} />
          </div>
        );
    }
}

export default FieldInput;
