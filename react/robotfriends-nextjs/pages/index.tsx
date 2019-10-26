import React from 'react';
import ReactDOM from 'react-dom';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import App from '../containers/App';
import { searchRobots, requestRobots } from '../reducers';

const rootReducer = combineReducers({ 
  search: searchRobots,
  request: requestRobots
});
export type AppState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

const Index: React.FC = () => (
  <React.Fragment>
    <Head>
      <title>RobotFriends</title>
      <link rel="icon" href="/favicon.ico"/>
      <link rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"/>
      <link rel="stylesheet" href="/static/index.css"/>
    </Head>
    <Provider store={store}>
      <App />
    </Provider>
  </React.Fragment>
);

export default Index;