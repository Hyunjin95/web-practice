import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

it('expect to render CardList component', () => {
    const mockRobots = [
        {
            key: 1,
            id: 1,
            name: 'John Snow',
            email: 'jsnow@gmail.com'
        }
    ];
    expect(shallow(<CardList robots={mockRobots} />).debug()).toMatchSnapshot();
});