import React, { PropTypes } from 'react'
import {
  Text,
  ScrollView
} from 'react-native'
import BasicView from './BasicView'


const ListScenes = ({scenes, onTextClick}) => {
  return (
    <ScrollView>
      {scenes.map((scene, index) =>
        <BasicView
          onClick = { () => onTextClick(scene.key) }
          itemText = { scene.title }
        />
      )}
    </ScrollView>
  )
}

export default ListScenes
