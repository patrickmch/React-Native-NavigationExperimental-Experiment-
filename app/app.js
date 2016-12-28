import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux';

import ShowText from './ShowText';
import reducer from './reducer';

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
