import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';
import Header from './Header';

import { IRobot, IAppProps } from '../pages/index';

interface IStates {
    robots: Array<IRobot>,
    searchField: string,
}

class MainPage extends React.Component<IAppProps, IStates> {
    constructor(props: IAppProps) {
        super(props);
        this.state = {
            robots: props.robots,
            searchField: ''
        };
    }

    filteredRobots = (): Array<IRobot> => {
        return this.props.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
    };

    onSearchChange = (event: React.SyntheticEvent<HTMLInputElement>): void => {
        this.setState({ searchField: event.currentTarget.value })
    }

    render() {
        const { isError } = this.props;
        
        return!this.state.robots.length ?
            <h1>Loading...</h1>
            :
            (
            <div className="tc">
                <Header />
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundary isError={isError}>
                        <CardList robots={this.filteredRobots()} />
                    </ErrorBoundary>
                </Scroll>    
            </div>
            );
    }
}

export default MainPage;