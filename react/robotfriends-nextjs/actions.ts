
import { Action } from 'redux';

import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS
} from './constants';

import {
    SearchField,
    robot,
    RequestRobots
} from './types';

interface IChangeSearchFieldAction extends Action<'CHANGE_SEARCH_FIELD'> {
    type: 'CHANGE_SEARCH_FIELD'
}

export const setSearchField = (text: string): SearchField => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
});

const requestRobotsPending = (): RequestRobots => {
    return { type: REQUEST_ROBOTS_PENDING, payload: null };
};

const requestRobotsSuccess = (data: robot): RequestRobots => {
    return { type: REQUEST_ROBOTS_SUCCESS, payload: data };
}

const requestRobotsFailed = (error: any): RequestRobots => {
    return { type: REQUEST_ROBOTS_FAILED, payload: error };
}

export const requestRobots = () => (dispatch: Function): Promise<Response> => {
    dispatch(requestRobotsPending());
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch(requestRobotsSuccess(data)))
        .catch(error => dispatch(requestRobotsFailed(error)))
};
