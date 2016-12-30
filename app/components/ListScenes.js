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
          onClick = { onTextClick }
          itemText = { scene }
          key = { index }
          />
      )}
    </ScrollView>
  )
}

export default ListScenes
