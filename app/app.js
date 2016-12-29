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
  testFunction(){
    console.log('testFunction')
  }

  render() {
    return (
      <View style = {newStyle.testStyle}>
        <Provider store = { store }>
          <ShowText />
        </Provider>
        <TouchableHighlight onPress = { this.testFunction }>
          <Text>asdf</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

newStyle = StyleSheet.create({
  testStyle : {
    paddingTop: 20,
  }
})
