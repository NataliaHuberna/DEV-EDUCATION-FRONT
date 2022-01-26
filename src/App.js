import React, { Component } from 'react';
import './App.scss';
import Control from './components/Control/Control';
import FieldInput from './components/FieldInput/FieldInput';
import Header from './components/Header/Header';
import TimeDisplay from './components/TimeDisplay/TimeDisplay';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeLeft: 0,
            timerId: 0,
        };
    }
     
    setTime = (time) => this.setState({timeLeft: time });

    setNewTime = () => this.setState({ timeLeft: this.state.timeLeft - 1 });

    startTimer = () => {
        this.timerId = setInterval(() => {
            if (this.state.timeLeft === 1) this.stopTimer();
            this.setNewTime();
        }, 1000);
        this.setState({ timerId: this.timerId });
    } 

    stopTimer = () => {
        clearInterval(this.timerId);
        this.setState({ timerId: 0 });
    }

    resetTime = () => {
        this.setState({ timeLeft: 0 });
        this.stopTimer();
    };
    
    render() {
        return (
          <div className="App">
            <Header />
            <div className="container">
                <FieldInput setTime={this.setTime} resetTime={this.resetTime} />
                <TimeDisplay time={this.state.timeLeft} />
                <Control
                    stopTimer={this.stopTimer}
                    startTimer={this.startTimer}
                    resetTime={this.resetTime}
                    isTick={!!this.state.timerId}
                    zero={this.state.timeLeft}
                />
            </div>
          </div>
        );
  }
}

export default App;
