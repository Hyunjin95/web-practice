import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';
import Header from './Header';
import './MainPage.css';

class MainPage extends React.Component {
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
                    <Header />
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

export default MainPage;