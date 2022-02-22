import React from "react";
import {shallow} from 'enzyme';
import List from "../List";
import {mockStore, mountSmart} from "../../../helpers/helperTest";

describe('Item', () => {
    let props;
    beforeEach(() => {
        props = {
            todos: [{value: 'task1', id: 1, checked: false},
                {value: 'task2', id: 2, checked: false},
                {value: 'task3', id: 3, checked: false}]
        }
    });

    const store = mockStore({todos: [{value: 'task1', id: 1, checked: false},
            {value: 'task2', id: 2, checked: false},
            {value: 'task3', id: 3, checked: false}]});

    it('should render correctly', () => {
        const component = shallow(<List {...props}/>);
        expect(component).toMatchSnapshot();
    });

    it('should render correctly', () => {
        const component = mountSmart(<List {...props} />, store);
        expect(component.find('List').getElement().props.todos).toEqual(props.todos);
    });

    it('should render prop todos', () => {
        const component = mountSmart(<List {...props} />, store);
        expect(component.find('div').at(0).getElement().props.children.length).toEqual(props.todos.length);
    });

})