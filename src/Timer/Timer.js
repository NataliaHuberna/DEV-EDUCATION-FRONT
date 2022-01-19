import { Component } from 'react';
import { countTimes } from '../helpers/helpers';
import { DELAY } from '../constants/constants';

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      currentTime: new Date().getTime(),
    };
  }

  setNewDate = () => this.setState({currentTime: new Date().getTime()});

  componentDidMount() {
    this.interval = setInterval(this.setNewDate, DELAY);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { days, hours, minutes, seconds } = countTimes(
      this.state.currentTime
    );
    return `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
  }
}

export default Timer;
