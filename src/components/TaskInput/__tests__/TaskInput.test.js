import React from "react";
import {mount, shallow} from 'enzyme';
import TaskInput from "../TaskInput";
import {act} from "react-dom/test-utils";

describe('TaskInput', () => {
    let props;
    const setStateMock = jest.fn();

    beforeEach(() => {
        props = {
            addTodos: jest.fn()
        }
        React.useState = jest.fn().mockReturnValue(['some title', setStateMock]);
        Date.now = jest.fn(() => 1487076708000);
    })

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should set in state', () => {
        const component = shallow(<TaskInput {...props}/>);
        expect(component).toMatchSnapshot();
    });

    it('should set to state', () => {
        const component = mount(<TaskInput {...props}/>);
        act(()=> {
            component.find('input').getElement().props.onChange({target:{ value : 'some text'}});
        });
        expect(setStateMock).toHaveBeenCalledWith('some text');
    });

    it ('should check prop add task', () => {
        const component = mount(<TaskInput {...props}/>);
        act(()=> {
            component.find('button').getElement().props.onClick();
        });
        expect(props.addTodos).toHaveBeenCalledWith({value: 'some title', id: Date.now(), checked: false});
        expect(setStateMock).toHaveBeenCalled();
    });

    it ('should check prop add task with enter', () => {
        const component = mount(<TaskInput {...props}/>);
        act(()=> {
            component.find('input').simulate('keypress', { key: 'Enter' });
        });
        expect(props.addTodos).toHaveBeenCalledWith({value: 'some title', id: Date.now(), checked: false});
        expect(setStateMock).toHaveBeenCalled();
    });

})