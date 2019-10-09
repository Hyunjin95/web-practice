import React from 'react';
import './App.css';
import Page1 from './components/Page1';
// import Page2 from './components/Page2';
// import Page3 from './components/Page3';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: 'page1',
      component: Page1
    }
  }

  onRouteChange = (route) => {
    // No code splitting
    // this.setState({route});

    // With code splitting
    if (route === 'page1') {
      this.setState({ route, component: Page1 });
    }
    else if (route === 'page2') {
      import('./components/Page2')
        .then((Page2) => {
          this.setState({ route, component: Page2.default });
        });
    }
    else if (route === 'page3') {
      import('./components/Page3')
        .then((Page3) => {
          this.setState({ route, component: Page3.default });
        });
    }
  }

  render() {
    const { route } = this.state;

    // No code splitting
    // return (
    //   <div>
    //     {route === 'page1' ? (
    //       <Page1 onRouteChange={this.onRouteChange} />
    //     )
    //     : route === 'page2' ? (
    //       <Page2 onRouteChange={this.onRouteChange} />
    //     )
    //     : route === 'page3' ? (
    //       <Page3 onRouteChange={this.onRouteChange} />
    //     )
    //     : (
    //       <h1>Unforeseen error has occured!!</h1>
    //     )}
    //   </div>
    // );

    return <this.state.component onRouteChange={this.onRouteChange} />;
  }
}

export default App;