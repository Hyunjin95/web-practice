import React from 'react';
import ReactDOM from 'react-dom';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import App from '../containers/App';
import { searchRobots, requestRobots } from '../reducers';

const rootReducer = combineReducers({ searchRobots, requestRobots});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

const Index: React.FC = () => (
  <React.Fragment>
    <Head>
      <title>RobotFriends</title>
      <link href="/public/index.css" />
    </Head>
    <Provider store={store}>
      <App />
    </Provider>
  </React.Fragment>
);

export default Index;