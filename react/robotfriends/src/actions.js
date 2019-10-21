import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS
} from './constants';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
});


const requestRobotsPending = () => {
    return { type: REQUEST_ROBOTS_PENDING };
};

const requestRobotsSuccess = (data) => {
    return { type: REQUEST_ROBOTS_SUCCESS, payload: data };
}

const requestRobotsFailed = (error) => {
    return { type: REQUEST_ROBOTS_FAILED, payload: error };
}

export const requestRobots = () => (dispatch) => {
    dispatch(requestRobotsPending());
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch(requestRobotsSuccess(data)))
        .catch(error => dispatch(requestRobotsFailed(error)))
};

// The following is the another way to define this function. See also App.js.
// export const requestRobots = (dispatch) => {
//     dispatch({ type: REQUEST_ROBOTS_PENDING });
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
//         .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
// };