import React, { Component, PropTypes } from 'react'
import {
  AppRegistry,
  StyleSheet,
  NavigationExperimental,
  Text
} from 'react-native'
import { connect } from 'react-redux'
import  { firstAction, secondAction }  from '../actions'
import { _renderScene } from '../components/_renderScene'
const {
	CardStack: NavigationCardStack,
	StateUtils: NavigationStateUtils
} = NavigationExperimental

class AppContainer extends Component {
  render() {
    const { navigationState, onTextClick } = this.props
    return (
        <NavigationCardStack
          style = { newStyle.testStyle }
          navigationState = { navigationState }
          renderScene = { () => _renderScene(navigationState, onTextClick) }
          renderHeader = {props => (
              <Text>{ props.navigationState.title }</Text>
            )
          }//renderHeader
        />//NavigationCardStack
    )//return
  }//render
}//AppContainer

newStyle = StyleSheet.create({
  testStyle : {
    paddingTop: 20,
  }
})

export default connect(
	state => ({
		navigationState: state.navigationState.data
	}),
	dispatch => ({
    onTextClick: (key) => {
        dispatch(firstAction(key))
    }//onTextClick
	})
)(AppContainer)
