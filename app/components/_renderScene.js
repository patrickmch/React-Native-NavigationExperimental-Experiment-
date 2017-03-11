import BasicView from './BasicView'
import PreviousScene from './PreviousScene'
import React, { Component, PropTypes } from 'react'
import {
  Text,
  TouchableHighlight,
  View,
  ScrollView,
} from 'react-native'

export function _renderScene({scene}, props){
  const { onTextClick } = props
  const { route, index } = scene

  //if there are no potential routes keep from erroring
  //TODO two separate declarations of PreviousScene are identical- find some way to eliminate this redundancy
  if(route.potentialRoutes === undefined){
      return(
        <View>
          <Text>{ route.info }</Text>
          <PreviousScene
              goBack={ props.navigateBack }
              backText={ props.backText }
          />
        </View>
      )
  } else {
      return (
        <ScrollView>
          {route.potentialRoutes.map((potentialRoute, index) =>
            <BasicView
              onClick = { () => onTextClick(potentialRoute.id) }
              itemText = { potentialRoute.title }
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
