import React from "react";
import {mount, shallow} from 'enzyme';
import List from "../List";
import {TTodo} from "../../../types/types";
import {todosMock} from "./__mockToDo__";

type TProps = {
    todos: Array<TTodo>,
    deleteTask: (id: number) => void,
    checkChange: (id: number) => void
};

describe('Item', () => {
    let props: TProps;
    beforeEach(() => {
        props = {
            todos: todosMock,
            deleteTask: jest.fn(),
            checkChange: jest.fn(),
        };
    });
    it('should render correctly', () => {
        const component = shallow(<List {...props}/>);
        expect(component).toMatchSnapshot();
    });
    it('should render prop taskText', () => {
        const component = mount(<List {...props}/>);
        // console.log(component.debug());
        expect(component.find('div div div').at(1).text()).toEqual(props.todos[0].title);
    });
    // it('should render prop checked', () => {
    //     const component = mount(<Item {...props}/>);
    //     expect(component.find('input').getElement().props.checked).toEqual(props.completed);
    // });
    // it('should call checkChange', () => {
    //     const component = mount(<Item {...props}/>);
    //     component.find('input').getElement().props.onClick();
    //     expect(props.checkChange).toHaveBeenCalledWith(props.id);
    // });
    // it('should call deleteTask', () => {
    //     const component = mount(<Item {...props}/>);
    //     component.find('button').getElement().props.onClick();
    //     expect(props.deleteTask).toHaveBeenCalledWith(props.id);
    // });
});
