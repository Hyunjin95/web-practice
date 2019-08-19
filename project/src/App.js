import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Logo from './components/Logo/Logo';
import Loader from './components/Loader/Loader';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank.js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import './App.css';
import 'tachyons';

const apiKey = '405201c0ed6d454db6317f758fb3bb11';
const app = new Clarifai.App({apiKey: apiKey});

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

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      isError: false,
      loading: false,
      route: 'signin',
    }
  }

  calculateFaceLocation = (response) => {
    const bounding_box = response.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol: bounding_box.left_col * width,
      topRow: bounding_box.top_row * height,
      rightCol: width - bounding_box.right_col * width,
      bottomRow: height - bounding_box.bottom_row * height,
    }    
  };

  displayFaceBox = (box) => {
    this.setState({
      isError: false,
      box: box
    });
  };

  displayError = () => {
    this.setState({
      isError: true,
      box: {
        leftCol: 0,
        topRow: 0,
        rightCol: 0,
        bottomRow: 0,
      }
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

    app.models.initModel({id: Clarifai.FACE_DETECT_MODEL})
      .then(faceDetectModel => {
        return faceDetectModel.predict(this.state.imageUrl);
      })
      .then(response => {
        this.displayFaceBox(this.calculateFaceLocation(response));
      })
      .catch(err => {
        console.log(err);
        this.displayError();
      })
      .finally(() => {
        this.setState({
          loading: false
        });
      });
  }

  onRouteChange = (route) => {
    this.setState({
      route: route
    })
  };

  render() {
    return (
      <div className="App">
        <Particles className='particles' 
          params={particlesOptions}
        />
        <Navigation onRouteChange={this.onRouteChange} />
        { this.state.route === 'signin' ?
          <SignIn onRouteChange={this.onRouteChange} />
          :
          <div>
            <Logo />
            <Rank />
            <ImageLinkForm onInputChange={this.onInputChange}
                            onButtonSubmit={this.onButtonSubmit}/>
            { this.state.loading ? <Loader /> : null }
            <FaceRecognition isError={this.state.isError}
                              box={this.state.box}
                              imageUrl={this.state.imageUrl}
                              loading={this.state.loading} />
          </div>
        }
      </div>
    );
  }
}

export default App;
