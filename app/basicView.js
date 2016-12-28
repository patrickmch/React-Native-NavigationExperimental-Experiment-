import React, { PropTypes } from 'react'
import {
  Text,
  TouchableHighlight
} from 'react-native'

const basicView = ({text}) => {
   return (
     <Text>{ text }</Text>
   )
}

basicView.PropTypes = {
  text: PropTypes.string.isRequired
}

export default basicView;
