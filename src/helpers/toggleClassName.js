import { COLOR_WHITE, COLOR_RED, COLOR_YELLOW } from '../constants/classNames';

export const toggleClassName = (value) => {
    let color = COLOR_WHITE;
    if (value === 1) {
        return (color = COLOR_RED);
    } else if (value === 2) {
        return (color = COLOR_YELLOW);
    } else return color;
};
