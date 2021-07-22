import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const MealDetailsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>MealDetailsScreen</Text>
      <Button title='Go Back' onPress={() => props.navigation.goBack()} />
      <Button title='Go home' onPress={() => props.navigation.popToTop()} />
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

export default MealDetailsScreen
