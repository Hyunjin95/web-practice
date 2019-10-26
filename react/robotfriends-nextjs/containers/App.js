import React from 'react';
import Redux from 'redux';
import { connect, ReactReduxContextValue } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';
import MainPage from '../components/MainPage';
import { AppState } from '../pages/index';


const mapStateToProps = (state) => {
    return {
        searchField: state.search.searchField,
        robots: state.request.robots,
        isPending: state.request.isPending,
        isError: state.request.isError
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.currentTarget.value)),
        onRequestRobots: () => dispatch(requestRobots())
    };
};

class App extends React.Component {
    render() {
        return <MainPage { ...this.props } />;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);