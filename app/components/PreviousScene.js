import React, { PropTypes } from 'react'
import {
  Text,
  TouchableHighlight,
  View
} from 'react-native'

const PreviousScene = ({backText, goBack}) =>{
    // console.log('goback', goBack)
    return (
      <View>
        <TouchableHighlight onPress = { goBack }>
          <Text>{ backText }</Text>
        </TouchableHighlight>
      </View>
    )
}
export default PreviousScene
