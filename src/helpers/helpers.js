import { DATE_OFF } from '../constants/constants';

export const countTimes = (currentTime) => {
    const countDownDate = DATE_OFF.getTime();
    const distance = countDownDate - currentTime;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    const times = { days: days, hours: hours, minutes: minutes, seconds: seconds };
    return times;
}