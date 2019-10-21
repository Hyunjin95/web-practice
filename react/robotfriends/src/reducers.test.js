import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS
} from './constants';

import * as reducers from './reducers';
import * as actions from './actions';

describe('searchRobots', () => {
    const initialStateSearch = { searchField: '' };

    it('should return the initial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual(initialStateSearch);
    });

    it('should handle CHANGE_SEARCHFIELD', () => {
        expect(reducers.searchRobots(initialStateSearch, actions.setSearchField('abc')))
            .toEqual({ searchField: 'abc' });
    });
});

describe('requestRobots', () => {
    const initialStateRobots = {
        isPending: false,
        robots: [],
        isError: false
    };

    it('should return the initial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
    });

    it('should handle REQUEST_ROBOTS_PENDING', () => {
        expect(reducers.requestRobots(initialStateRobots, { type: REQUEST_ROBOTS_PENDING }))
            .toEqual({ ...initialStateRobots, isPending: true });
    });

    it('should handle REQUEST_ROBOTS_SUCCESS', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{
                id: '123',
                name: 'test',
                email: 'test@gmail.com'
            }]
        }))
        .toEqual({
            robots: [{
                id: '123',
                name: 'test',
                email: 'test@gmail.com'
            }], isPending: false, isError: false });
    });

    it('should handle REQUEST_ROBOTS_FAILED', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_FAILED,
            payload: 'error'
        }))
        .toEqual({ error: 'error', robots: [], isPending: false, isError: true });
    });
});