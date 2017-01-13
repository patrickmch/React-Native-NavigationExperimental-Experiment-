import BasicView from './BasicView'
import React, { Component, PropTypes } from 'react'
import {
  Text,
  TouchableHighlight,
  View,
  ScrollView
} from 'react-native'

export function _renderScene(state, clickFunction){
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
