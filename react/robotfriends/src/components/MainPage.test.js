import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;

beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false,
        isError: false
    };
    wrapper = shallow(<MainPage { ...mockProps } />);
});

it('renders MainPage without crashing', () => {
    expect(wrapper.debug()).toMatchSnapshot();
});

it('filters robots correctly', () => {
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@email.com'
        }],
        searchField: 'o',
        isPending: false,
        isError: false
    };

    const wrapper2 = shallow(<MainPage { ...mockProps2 } />);
    expect(wrapper2.instance().filteredRobots()).toEqual(mockProps2.robots);

    const mockProps3 = { ...mockProps2, searchField: 'a' };
    const wrapper3 = shallow(<MainPage { ...mockProps3 } />);
    expect(wrapper3.instance().filteredRobots()).toEqual([]);
});

it('shows pending messages when pennding', () => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@email.com'
        }],
        searchField: 'o',
        isPending: true,
        isError: false
    };
    const wrapper = shallow(<MainPage { ...mockProps } />);
    expect(wrapper.debug()).toMatchSnapshot();
});