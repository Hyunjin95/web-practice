import React from 'react';
import './App.css';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: 'page1',
    }
  }

  onRouteChange = (route) => {
    this.setState({route});
  }

  render() {
    const { route } = this.state;
    return (
      <div>
        {route === 'page1' ? (
          <Page1 onRouteChange={this.onRouteChange} />
        )
        : route === 'page2' ? (
          <Page2 onRouteChange={this.onRouteChange} />
        )
        : route === 'page3' ? (
          <Page3 onRouteChange={this.onRouteChange} />
        )
        : (
          <h1>Unforeseen error has occured!!</h1>
        )}
      </div>
    );
  }
}

export default App;