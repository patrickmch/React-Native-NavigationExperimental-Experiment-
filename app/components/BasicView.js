import React, { PropTypes } from 'react'
import {
  Text,
  TouchableHighlight,
  View
} from 'react-native'


const BasicView = ({itemText, onClick}) => {
  return (
    <View>
       <TouchableHighlight onPress={ onClick }>
          <Text>
            { itemText }
          </Text>
      </TouchableHighlight>
    </View>
   )
}

BasicView.PropTypes = {
  text: PropTypes.string.isRequired,
  onTextClick: PropTypes.func.isRequired,
}

export default BasicView;
