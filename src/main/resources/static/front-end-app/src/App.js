import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducer'

import AppPage from './pages/AppPage'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SingUpPage'
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const store = createStore(
  reducer,
  undefined,
  applyMiddleware(thunkMiddleware, logger),
);


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route path='/home' component={AppPage} />
            <Route path='/sign-up' component={SignUpPage} />
            <Route path='/sign-in' component={LoginPage} />
            <Route component={NotFoundPage}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
