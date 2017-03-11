import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
import AppContainer from './containers/AppContainer'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(reducer)


export default class app extends Component {

  render() {

    return (
      <Provider store = { store }>
          <AppContainer />
      </Provider>
    );
  }
}
