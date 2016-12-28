import React, { PropTypes } from 'react'
import {
  Text
} from 'react-native'

const basicView = (state) => {
   return (
     <Text>{ state.text }</Text>
   )
}

basicView.PropTypes = {
  text: PropTypes.string.isRequired
}

export default basicView;
