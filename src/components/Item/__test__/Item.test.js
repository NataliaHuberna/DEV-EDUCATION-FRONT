import React from "react";
import {mount, shallow} from 'enzyme';
import Item from "../Item";

describe('Item', () => {
    let props;
    beforeEach(() => {
        props = {
            taskText:'some task',
            deleteTodo: jest.fn(),
            checked: false,
            checkTodo: jest.fn(),
            id: 1234,
            showNotification: jest.fn()
        }
    })
    it('should render correctly', () => {
       const component = shallow(<Item {...props}/>);
        expect(component).toMatchSnapshot();
    });
    it('should render prop taskText', () => {
        const component = mount(<Item {...props}/>);
        console.log(component.debug());
        expect(component.find('div').at(1).text()).toEqual(props.taskText);
    });
    it('should render prop checked', () => {
        const component = mount(<Item {...props}/>);
        expect(component.find('input').getElement().props.checked).toEqual(props.checked);
    });
    it('should call checkChange', () => {
        const component = mount(<Item {...props}/>);
        console.log(component.debug());
        component.find('input').getElement().props.onChange()
        expect(props.checkTodo).toHaveBeenCalledWith(props.id);
    });
    it('should call deleteTask', () => {
        const component = mount(<Item {...props}/>);
        console.log(component.debug());
        component.find('button').getElement().props.onClick()
        expect(props.deleteTodo).toHaveBeenCalledWith(props.id);
    });
})