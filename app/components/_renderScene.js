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
  //TODO two separate declarations of PreviousScene are identical- find some way to eliminate this redundancy
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
      //view updating too quickly bug: onTextClick returns the new route before the view updates. The difference between other working apps and yours is that yours does not have a new view for each scene. This means that the view you've provided will be both the new view and the old view, but both will update at the same time.
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
