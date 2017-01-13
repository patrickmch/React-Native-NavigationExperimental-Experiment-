import BasicView from './BasicView'
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
        <Text>{ navigationState.info }</Text>
      )
    default:
      return (
        <ScrollView>
          {navigationState.routes.map((route, index) =>
            <BasicView
              onClick = { () => onTextClick(route.key) }
              itemText = { route.title }
              key= { index }
            />
          )}
        </ScrollView>
      )
  }
}
