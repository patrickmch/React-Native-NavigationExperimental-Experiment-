import BasicView from './BasicView'
import PreviousScene from './PreviousScene'
import React, { Component, PropTypes } from 'react'
import {
  Text,
  TouchableHighlight,
  View,
  ScrollView,
} from 'react-native'
// var inc=0
export function _renderScene(props){
  const { navigationState, onTextClick } = props
  // console.log('props',props, inc);
  // inc++
  // switch(navigationState.viewToRender){
  //   case 'ModuleView':
  //     return(
  //       <View>
  //         <Text>{ navigationState.info }</Text>
  //         <PreviousScene
  //           goBack={ props.navigateBack }
  //           backText={ props.backText }
  //         />
  //       </View>
  //     )
  //   default:
      return (
        <ScrollView>
          {navigationState.routes[navigationState.index].potentialRoutes.map((route, index) =>
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
  // }
}
