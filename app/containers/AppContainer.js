import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigationExperimental
} from 'react-native'

const {
	CardStack: NavigationCardStack,
	StateUtils: NavigationStateUtils
} = NavigationExperimental

export default class AppContainer extends Component {

  constructor(props, context){
    super(props)
    this._renderScene = this._renderScene.bind(this)
  }

  _renderScene(){
    return <ShowText />
  }

  render() {
    //navigationState is undefined... likely the problem
    //it should be coming from reducer.js in the props (or so it seems to be in the example app)
    const { navigationState } = this.props
    console.log('reducer', navigationState)
    return (
        <NavigationCardStack
          style = { newStyle.testStyle }
          renderScene = { this._renderScene }
          navigationState = { navigationState }
        />
    );
  }
}

newStyle = StyleSheet.create({
  testStyle : {
    paddingTop: 20,
  }
})
