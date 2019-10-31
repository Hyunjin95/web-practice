import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';
import Header from './Header';
import './MainPage.css';

class MainPage extends React.Component {
    componentDidMount() {
        console.log(process.env.REACT_APP_SAY_HI);
        this.props.onRequestRobots();
    }

    filteredRobots = () => {
        return this.props.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
        });
    };

    render() {
        const { onSearchChange, isPending, isError } = this.props;
        
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
                            <CardList robots={this.filteredRobots()} />
                        </ErrorBoundary>
                    </Scroll>    
                </div>
            );
        }
    }
}

export default MainPage;