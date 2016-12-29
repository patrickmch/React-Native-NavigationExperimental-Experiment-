import React, { PropTypes } from 'react'
import {
  Text,
  TouchableHighlight,
  View
} from 'react-native'


const BasicView = ({text, onTextClick, somethingElse}) => {
  return (
    <View>
       <TouchableHighlight onPress={ onTextClick }>
          <Text>
            { text }
          </Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={ somethingElse }>
         <Text>
           Another
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
