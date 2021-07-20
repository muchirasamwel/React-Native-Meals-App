import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'

const MealsNavigatar = props => {
  return (
    <View style={styles.screen}>
      <Text>MealsNavigatar</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default MealsNavigatar
