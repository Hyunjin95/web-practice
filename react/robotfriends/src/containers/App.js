import React from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

import { setSearchField, requestRobots } from '../actions';

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
    };
};

class App extends React.Component {
    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const { searchField, onSearchChange, robots, isPending, isError } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });

        if (isPending) {
            return <h1 className='tc f1'>Loading</h1>;
        }
        else {
            return (
                <div className="tc">
                    <h1 className="f1">Robot Friends</h1>
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundary isError={isError}>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>    
                </div>
            );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);