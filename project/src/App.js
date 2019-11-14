import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import Loader from './components/Loader/Loader';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank.js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import './App.css';


const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

const initialState = {
  input: '',
  imageUrl: '',
  boxes: [],
  isError: false,
  loading: false,
  route: 'home',
  isSignedIn: false,
  user: {
    email: '',
    id: '',
    name: '',
    entries: 0,
    joined: ''
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({
      user: {
        email: data.email,
        id: data.id,
        name: data.name,
        entries: data.entries,
        joined: data.joined
      }
    });
  };

  calculateFaceLocations = (response) => {
    const list_bounding_boxes = response.outputs[0].data.regions.map(region => region.region_info.bounding_box);
    const image = document.getElementById('inputimage');

    return list_bounding_boxes.map(bounding_box => this.calculateBoundingBox(image, bounding_box));
  };

  calculateBoundingBox = (image, bounding_box) => {
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol: bounding_box.left_col * width,
      topRow: bounding_box.top_row * height,
      rightCol: width - bounding_box.right_col * width,
      bottomRow: height - bounding_box.bottom_row * height,
    }
  };

  displayFaceBoxes = (boxes) => {
    this.setState({
      isError: false,
      boxes
    });
  };

  displayError = () => {
    this.setState({
      isError: true,
      boxes: [{
        leftCol: 0,
        topRow: 0,
        rightCol: 0,
        bottomRow: 0,
      }]
    });
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({
      imageUrl: this.state.input,
      loading: true
    });

    fetch(process.env.REACT_APP_SERVER_URL + '/imageurl', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        input: this.state.input
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response) {
          fetch(process.env.REACT_APP_SERVER_URL + '/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(res => res.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, { entries: count }));      
            });
          this.displayFaceBoxes(this.calculateFaceLocations(response));
        }
      })
      .catch(() => this.displayError())
      .finally(() => this.setState({ loading: false }));
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState);
    }
    else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route});
  };

  render() {
    const { isSignedIn, imageUrl, route, boxes, isError, loading, user } = this.state;
    return (
      <div className="App">
        <Particles className='particles' 
          params={particlesOptions}
        />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        { route === 'home' ?
          <div>
            <Logo />
            <Rank name={user.name} entries={user.entries} />
            <ImageLinkForm onInputChange={this.onInputChange}
                            onButtonSubmit={this.onButtonSubmit}/>
            { loading ? <Loader /> : null }
            <FaceRecognition isError={isError}
                              boxes={boxes}
                              imageUrl={imageUrl}
                              loading={loading} />
          </div>
          : route === 'signin' || route === 'signout' ?
          <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
          :
          <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        }
      </div>
    );
  }
}

export default App;
