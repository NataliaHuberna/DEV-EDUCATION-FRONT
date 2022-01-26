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
            timeStart: 0,
            isTick: false
        };
    }
     
    setTime = (time) => this.setState({ timeStart: time, timeLeft: time });

    setNewTime = () => this.setState({ timeLeft: this.state.timeLeft - 1 });

    startTimer = () => {
        this.setState({ isTick: true });
        this.timerID = setInterval(() => {
            if (this.state.timeLeft === 1) this.stopTimer();
            this.setNewTime();
        }, 1000);
    } 

    stopTimer = () => clearInterval(this.timerID);
    
    resetTime = () => {
        this.setState({ timeStart: 0, timeLeft: 0 });
        this.stopTimer();
    };
    
    handleTick = (isTick) => this.setState({ isTick: !isTick });
    
    render() {
        return (
        <div className="App">
            <Header />
            <div className="container">
            <FieldInput setTime={this.setTime} />
            <TimeDisplay time={this.state.timeLeft} />
            <Control
                stopTimer={this.stopTimer}
                startTimer={this.startTimer}
                resetTime={this.resetTime}
                isTick={this.state.isTick}
                handleTick={this.handleTick}
                zero={this.state.timeLeft}
            />
            </div>
        </div>
        );
  }
}

export default App;
