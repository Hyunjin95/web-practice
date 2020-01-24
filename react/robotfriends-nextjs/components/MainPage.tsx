import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';
import Header from './Header';

import { Robot, AppProps } from '../pages/index';

interface States {
  robots: Array<Robot>;
  searchField: string;
}

class MainPage extends React.Component<AppProps, States> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      robots: props.robots,
      searchField: '',
    };
  }

  filteredRobots = (): Array<Robot> => {
    const { robots } = this.props;
    const { searchField } = this.state;

    // eslint-disable-next-line
    return robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
  };

  onSearchChange = (event: React.SyntheticEvent<HTMLInputElement>): void => {
    this.setState({ searchField: event.currentTarget.value });
  };

  render(): JSX.Element {
    const { isError } = this.props;
    const { robots } = this.state;

    return !robots.length ? (
      <h1>Loading...</h1>
    ) : (
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
