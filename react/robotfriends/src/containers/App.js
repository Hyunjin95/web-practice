import React from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';
import MainPage from '../components/MainPage';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        isError: state.requestRobots.isError
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
        // The following is the another way to define this function. See also actions.js
        // onRequestRobots: () => requestRobots(dispatch)
    };
};

class App extends React.Component {
    render() {
        return <MainPage { ...this.props } />;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);