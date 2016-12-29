import React, { PropTypes } from 'react'
import {
  Text,
  TouchableHighlight,
  View
} from 'react-native'

const BasicView = ({text, onTestClickss}) => {
  return (
    <View>
       <TouchableHighlight onPress={ onTestClickss }>
          <Text>
            { text }
          </Text>
      </TouchableHighlight>
    </View>
   )
}

BasicView.PropTypes = {
  text: PropTypes.string.isRequired,
  onTestClickss: PropTypes.func.isRequired
}

export default BasicView;
