import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducer'

import AppPage from './pages/AppPage'

const store = createStore(
  reducer,
  undefined,
  applyMiddleware(thunkMiddleware, logger),
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppPage  />
      </Provider>
    );
  }
}

export default App;
