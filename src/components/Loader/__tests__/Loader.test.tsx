import React from 'react';
import {shallow, mount} from 'enzyme';
import Loader from "../Loader";

describe('Loader test', () => {
    it('should render correctly', () => {
        const component = shallow(<Loader />);
        expect(component).toMatchSnapshot();
    });
    it('should render 4 div', () => {
        const component = mount(<Loader/>);
        expect(component.find('h1')).toHaveLength(4);
    });
});
