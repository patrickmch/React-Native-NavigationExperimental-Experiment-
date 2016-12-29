import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux';

import ShowText from './containers/ShowText';
import reducer from './reducer';

let store = createStore(reducer);

export default class app extends Component {

  render() {
    return (
      <View style = {newStyle.testStyle}>
        <Provider store = { store }>
          <ShowText/>
        </Provider>
      </View>
    );
  }
}

newStyle = StyleSheet.create({
  testStyle : {
    paddingTop: 20,
  }
})
