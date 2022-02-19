import React from "react";
import {mount, shallow} from 'enzyme';
import Item from "../Item";

type TProps = {
    title: string,
    deleteTask: (id: number) => void,
    completed: boolean,
    checkChange: (id: number) => void,
    id: number
};

describe('Item', () => {
    let props: TProps;
    beforeEach(() => {
        props = {
            title:'some task',
            deleteTask: jest.fn(),
            completed: false,
            checkChange: jest.fn(),
            id: 1234
        };
    });
    it('should render correctly', () => {
        const component = shallow(<Item {...props}/>);
        expect(component).toMatchSnapshot();
    });
    it('should render prop taskText', () => {
        const component = mount(<Item {...props}/>);
        expect(component.find('div').at(1).text()).toEqual(props.title);
    });
    it('should render prop checked', () => {
        const component = mount(<Item {...props}/>);
        expect(component.find('input').getElement().props.checked).toEqual(props.completed);
    });
    it('should call checkChange', () => {
        const component = mount(<Item {...props}/>);
        component.find('input').getElement().props.onClick();
        expect(props.checkChange).toHaveBeenCalledWith(props.id);
    });
    it('should call deleteTask', () => {
        const component = mount(<Item {...props}/>);
        component.find('button').getElement().props.onClick();
        expect(props.deleteTask).toHaveBeenCalledWith(props.id);
    });
});
