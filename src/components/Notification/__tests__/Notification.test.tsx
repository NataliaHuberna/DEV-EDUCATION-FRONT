import React from "react";
import {mount, shallow} from 'enzyme';
import Notification from "../Notification";

type TProps = {
    type: string,
    message: string
};

describe('Item', () => {
    let props: TProps;
    beforeEach(() => {
        props = {
            type: 'success',
            message: 'Good job'
        };
    });

    it('should render correctly', () => {
        const component = shallow(<Notification {...props}/>);
        expect(component).toMatchSnapshot();
    });

    it('should render prop message', () => {
        const component = mount(<Notification {...props}/>);
        expect(component.find('p').at(0).text()).toEqual(props.message);
    });

});
