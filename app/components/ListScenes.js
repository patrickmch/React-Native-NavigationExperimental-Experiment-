import React, { PropTypes } from 'react'
import {
  Text,
  ScrollView
} from 'react-native'
import BasicView from './BasicView'


const ListScenes = ({scenes, onTextClick}) => {
  return (
    <ScrollView>
      {scenes.map((scene, key) =>
        <BasicView
          onClick = { onTextClick }
          itemText = { scene }
          key = { key }
          />
      )}
    </ScrollView>
  )
}

export default ListScenes
