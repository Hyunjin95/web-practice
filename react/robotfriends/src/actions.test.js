import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS
} from './constants';
import * as actions from './actions';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import fetchMock from 'fetch-mock';


const middlewares = [thunkMiddleware]
const mockStore = configureStore(middlewares);

describe('tests setting search fields', () => {
    it('should create an action to search robots', () => {
        const text = 'wooo';
        const expectedAction = {
            type: CHANGE_SEARCH_FIELD,
            payload: text
        };
        expect(actions.setSearchField(text)).toEqual(expectedAction);
    });
});

describe('tests requesting robots API', () => {
    afterEach(() => {
        fetchMock.restore();
    });

    it('expected actions on succeeding in getting API', () => {
        fetchMock.get('https://jsonplaceholder.typicode.com/users', { response: 200 });

        const expectedActions = [
            REQUEST_ROBOTS_PENDING,
            REQUEST_ROBOTS_SUCCESS
        ];
        const store = mockStore();

        return store.dispatch(actions.requestRobots()).then(() => {
            const storeActions = store.getActions().map(action => action.type);
            expect(storeActions).toEqual(expectedActions);
        });
    });

    it('expected actions on failing to get API', () => {
        fetchMock.get('https://jsonplaceholder.typicode.com/users', 404);

        const expectedActions = [
            REQUEST_ROBOTS_PENDING,
            REQUEST_ROBOTS_FAILED
        ];
        const store = mockStore();

        return store.dispatch(actions.requestRobots()).then(() => {
            const storeActions = store.getActions().map(action => action.type);
            expect(storeActions).toEqual(expectedActions);
        });
    });
});
