import React, { Component, PropTypes } from 'react'
import {
  AppRegistry,
  StyleSheet,
  NavigationExperimental,
  Text
} from 'react-native'
import { connect } from 'react-redux'
import  { push, pop }  from '../actions'
import { _renderScene } from '../components/_renderScene'
const {
	CardStack: NavigationCardStack,
	StateUtils: NavigationStateUtils
} = NavigationExperimental

class AppContainer extends Component {
  render() {
    // const { navigationState, onTextClick } = this.props
    return (
        <NavigationCardStack
          style = { newStyle.testStyle }
          navigationState = { this.props.navigationState }
          renderScene = { () => _renderScene(this.props) }
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
		navigationState: state.navigationState,
    backText: 'Back'
	}),
	dispatch => ({
    onTextClick: (key) => dispatch(push(key)),
    navigateBack: () => dispatch(pop())
	})
)(AppContainer)
