import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigationExperimental
} from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducer'
import AppContainer from './containers/AppContainer'

let store = createStore(reducer)


export default class app extends Component {

  render() {
    
    return (
      <Provider store = { store }>
        <View>
          <AppContainer />
        </View>
      </Provider>
    );
  }
}

newStyle = StyleSheet.create({
  testStyle : {
    paddingTop: 20,
  }
})
