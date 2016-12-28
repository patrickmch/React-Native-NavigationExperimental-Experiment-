import React, { Component } from 'react';
// import { combineReducers } from 'redux';
// import { connect } from 'react-redux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider } from 'react-redux'
import { createStore } from 'redux';


// import index from './index';
import ShowText from './ShowText';
import reducer from './reducer';
// import myFirstActionCreator from './actions';

let store = createStore(reducer);

export default class app extends Component {
  render() {
    return (
      <Provider store = { store }>
        <ShowText />
      </Provider>
    );
  }
}
