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
  const { routes, index } = navigationState
  const currentRoute = routes[index]
  //if there are no potential routes keep from erroring 
  if(currentRoute.potentialRoutes === undefined){
      return(
        <View>
          <Text>{ currentRoute.info }</Text>
          <PreviousScene
              goBack={ props.navigateBack }
              backText={ props.backText }
          />
        </View>
      )
  } else {
      return (
        <ScrollView>
          {currentRoute.potentialRoutes.map((route, index) =>
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
}//renderScene
