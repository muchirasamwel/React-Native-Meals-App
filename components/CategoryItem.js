import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import Colors from '../constants/Colors'

const CategoryItem = props => {
  return (
    <TouchableOpacity style={styles.category} onPress={props.onPress}>
      <View>
        <Text>{props.item.name}</Text>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  category: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    flex: 1,
    borderColor: Colors.secondary,
    borderWidth: 1
  }
})

export default CategoryItem
