import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducer'

import HomePage from './pages/HomePage'

const store = createStore(
  reducer,
  undefined,
  applyMiddleware(thunkMiddleware, logger),
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HomePage  />
      </Provider>
    );
  }
}

export default App;
