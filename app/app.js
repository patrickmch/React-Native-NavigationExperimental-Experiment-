import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux';

import ShowText from './ShowText';
import reducer from './reducer';

let store = createStore(reducer);

export default class app extends Component {

  pressTest(){
    console.log('pressTest')
  }

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
