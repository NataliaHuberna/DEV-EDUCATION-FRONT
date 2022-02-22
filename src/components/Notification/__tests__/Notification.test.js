import React from "react";
import {mount, shallow} from 'enzyme';
import Notification from "../Notification";

describe('Item', () => {
    let props;
    beforeEach(() => {
        props = {
            clearNotification: jest.fn(),
            notify: {type: 'success', message: 'some message'}
        };
        jest.useFakeTimers();
    });

    afterEach(()=>{
        jest.clearAllMocks();
    });

    it( 'should render correctly', () => {
        const component = shallow(<Notification {...props}/>);
        expect(component).toMatchSnapshot();
    });

    it('should render notification', () => {
        const component = mount(<Notification {...props}/>);
        expect(component.find('p').at(0).text().trim()).toEqual(props.notify.message);
    });

    it('should show and hide notification', () => {
        mount(<Notification {...props}/>);
        expect(props.clearNotification).not.toBeCalled();
        jest.runAllTimers();
        expect(props.clearNotification).toHaveBeenCalledTimes(1);
    });

})