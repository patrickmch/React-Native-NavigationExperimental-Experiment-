import React, { Component, PropTypes } from 'react'
import {
  AppRegistry,
  StyleSheet,
  NavigationExperimental,
  Text,
  View
} from 'react-native'
import { connect } from 'react-redux'
import  { push, pop }  from '../actions'
import { _renderScene } from '../components/_renderScene'
const {
	CardStack: NavigationCardStack,
	StateUtils: NavigationStateUtils,
  Card: NavigationCard
} = NavigationExperimental

//TODO how to handle back button???

class AppContainer extends Component {
  render() {
    const { navigationState } = this.props
    const { routes, index } = navigationState
    return (
        <NavigationCardStack
          style = { newStyle.testStyle }
          navigationState = { navigationState }
          renderScene = { () => _renderScene(this.props) }
          renderHeader = {props => (
              <View>
                <Text>{ routes[index].title }</Text>
              </View>
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

AppContainer.PropTypes = {
  navigationState: PropTypes.object,
  backText: PropTypes.string,
  onTextClick: PropTypes.func,
  navigateBack: PropTypes.func

}

export default connect(
	state => ({
		navigationState: state.navigationState,
    backText: 'Back'
	}),
	dispatch => ({
    onTextClick: (id) => dispatch(push(id)),
    navigateBack: () => dispatch(pop())
	})
)(AppContainer)
