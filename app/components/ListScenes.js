import React, { PropTypes } from 'react'
import {
  Text,
  ScrollView
} from 'react-native'
import BasicView from './BasicView'


const ListScenes = ({text, onTextClick}) => {
  console.log(text)
  return (
    <ScrollView>
      <BasicView
        onClick = { onTextClick }
        itemText = { text }
        />
    </ScrollView>
  )
}

export default ListScenes
