import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'

import MealItem from './MealItem'

const MealList = props => {
  const { navigation } = { ...props }

  const navigateDetails = meal => {
    console.log(meal)
    navigation.navigate({
      routeName: 'MealDetails',
      params: { mealId: meal.id, mealName: meal.title, fav: meal.fav }
    })
  }
  return (
    <View style={styles.screen}>
      <FlatList
        numColumns='2'
        data={props.meals}
        renderItem={itemData => (
          <MealItem
            meal={itemData.item}
            onPress={navigateDetails.bind(this, itemData.item)}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
})

export default MealList
