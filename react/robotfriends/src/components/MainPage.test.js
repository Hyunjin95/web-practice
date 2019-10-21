import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

it('expect to render App container', () => {
    const mockStore = {
        robots: [],
        searchField: ''
    };
    expect(shallow(<MainPage store={mockStore} />).debug()).toMatchSnapshot();
});