import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigationExperimental,
  ScrollView
} from 'react-native'
import { connect } from 'react-redux'
import  { firstAction, secondAction }  from '../actions'
import BasicView from '../components/BasicView'

const {
	CardStack: NavigationCardStack,
	StateUtils: NavigationStateUtils
} = NavigationExperimental

class AppContainer extends Component {

  _renderScene(state, clickFunction){
    return (
      <ScrollView>
        {state.routes.map((scene, index) =>
          <BasicView
            onClick = { () => clickFunction(scene.key) }
            itemText = { scene.title }
            key= { index }
          />
        )}
      </ScrollView>
    )
  }

  render() {
    const { navigationState, onTextClick } = this.props
    return (
        <NavigationCardStack
          style = { newStyle.testStyle }
          renderScene = { () => this._renderScene(navigationState, onTextClick) }
          navigationState = { navigationState }
        />
    )
  }
}

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
