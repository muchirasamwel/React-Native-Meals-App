import React from 'react'
import {
  StyleSheet,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback
} from 'react-native'

const Touch = props => {
  let TouchableComponent = TouchableOpacity
  if (Platform.OS == 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback
  }

  return (
    <TouchableComponent style={{ ...styles.touch, ...props.style }} {...props}>
      {props.children}
    </TouchableComponent>
  )
}
const styles = StyleSheet.create({
  touch: {
    flex: 1
  }
})

export default Touch
