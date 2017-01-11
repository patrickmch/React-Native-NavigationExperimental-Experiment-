import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigationExperimental
} from 'react-native'
import { connect } from 'react-redux'
import  { firstAction, secondAction }  from '../actions'
import ShowText from './ShowText'

const {
	CardStack: NavigationCardStack,
	StateUtils: NavigationStateUtils
} = NavigationExperimental

class AppContainer extends Component {

  constructor(props, context){
    super(props)
    this._renderScene = this._renderScene.bind(this)
  }

  _renderScene(){
    return <ShowText />
  }

  render() {
    const { navigationState } = this.props
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

export default connect(
	state => ({
		navigationState: state.navigationState
	}),
	dispatch => ({
		backAction: () => {
			dispatch(navigatePop())
		}
	})
)(AppContainer)
