import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS
} from './constants';

export type SearchField = {
    type: typeof CHANGE_SEARCH_FIELD,
    payload: string
};

export type robot = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
};

export interface IRobot {
    name: string;
    id: number;
    email: string;
};

interface IRequestRobotsPending {
    type: typeof REQUEST_ROBOTS_PENDING,
    payload: any
};

interface IRequestRobotsSuccess {
    type: typeof REQUEST_ROBOTS_SUCCESS,
    payload: Array<robot>
};

interface IRequestRobotsFailed {
    type: typeof REQUEST_ROBOTS_FAILED,
    payload: any
};

export type RequestRobots = IRequestRobotsPending | IRequestRobotsSuccess | IRequestRobotsFailed;


export interface ISearchState {
    searchField: string
};

export interface IRequestRobotState {
    isPending: boolean,
    isError: boolean,
    robots?: Array<robot>,
    error?: any
};

export type State = ISearchState | IRequestRobotState;