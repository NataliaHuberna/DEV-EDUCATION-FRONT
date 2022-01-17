import { Component } from 'react';

class Timer extends Component {
    constructor() {
        super();
        this.state = {
        curTime: new Date().getTime(),
        };
    }
    
    componentDidMount() {
        this.interval = setInterval(() => {
        this.setState({
            curTime: new Date().getTime(),
        });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const countDownDate = new Date('Jan 1, 2023 00:00:01').getTime();
        const distance = countDownDate - this.state.curTime;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        return `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
    }
}

export default Timer;
