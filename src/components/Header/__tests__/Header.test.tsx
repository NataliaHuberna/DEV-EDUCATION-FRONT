import React from "react";
import {mount, shallow} from 'enzyme';
import Header from "../Header";

describe('Header', () => {
    it('should render correctly', () => {
        const component = shallow(<Header />);
        expect(component).toMatchSnapshot();
    });
    it('should render title ToDoList', () => {
        const component = mount(<Header />);
        expect(component.find('h1').text()).toEqual('ToDoList');
    });

})
