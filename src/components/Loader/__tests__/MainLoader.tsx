import React from 'react';
import {shallow, mount} from 'enzyme';
import MainLoader from "../MainLoader";

describe('MainLoader test', () => {
    it('should render correctly', () => {
        const component = shallow(<MainLoader/>);
        expect(component).toMatchSnapshot();
    });
    it('should render 6 div( all loader) ', () => {
        const component = mount(<MainLoader/>);
        expect(component.find('div')).toHaveLength(6);
    });
});
