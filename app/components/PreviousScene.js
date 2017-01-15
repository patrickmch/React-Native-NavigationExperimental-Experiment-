import React, { PropTypes } from 'react'
import {
  Text,
  TouchableHighlight,
  View
} from 'react-native'

const PreviousScene = () =>{
    return (
      <View>
        <TouchableHighlight onPress = { () => console.log('Previous') }>
          <Text>Previous</Text>
        </TouchableHighlight>
      </View>
    )
}
export default PreviousScene
