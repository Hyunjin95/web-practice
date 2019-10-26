import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS
} from './constants';

import {
    ISearchState,
    SearchField,
    IRequestRobotState,
    RequestRobots
} from './types'


const initialStateSearch: ISearchState = {
    searchField: ''
};

export const searchRobots = (state: ISearchState = initialStateSearch, action: SearchField): ISearchState => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            // return Object.assign({}, state, { searchField: action.payload });
            return { ...state, searchField: action.payload };
        default:
            return state;
    }
};

const initialStateRobots: IRequestRobotState = {
    isPending: false,
    robots: [],
    isError: false
};

export const requestRobots = (state: IRequestRobotState = initialStateRobots, action: RequestRobots): IRequestRobotState => {
    switch(action.type) {
        case REQUEST_ROBOTS_PENDING:
            return { ...state, isPending: true };
        case REQUEST_ROBOTS_SUCCESS:
            return { ...state, robots: action.payload, isPending: false };
        case REQUEST_ROBOTS_FAILED:
            return { ...state, error: action.payload, isPending: false, isError: true };
        default:
            return state;
    }
};
