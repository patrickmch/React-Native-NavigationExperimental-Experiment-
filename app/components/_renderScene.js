import BasicView from './BasicView'
import PreviousScene from './PreviousScene'
import React, { Component, PropTypes } from 'react'
import {
  Text,
  TouchableHighlight,
  View,
  ScrollView,
} from 'react-native'

export function _renderScene(props){
  const { navigationState, onTextClick } = props
  switch(navigationState.viewToRender){
    case 'ModuleView':
      return(
        <View>
          <Text>{ navigationState.info }</Text>
          <PreviousScene
            goBack={ props.navigateBack }
            backText={ props.backText }
          />
        </View>
      )
    default:
      return (
        <ScrollView>
          {navigationState.routes.map((route, index) =>
            <BasicView
              onClick = { () => onTextClick(route.id) }
              itemText = { route.title }
              key= { index }
            />
          )}
          <PreviousScene
            goBack={ props.navigateBack }
            backText={ props.backText }
          />
        </ScrollView>
      )
  }
}
