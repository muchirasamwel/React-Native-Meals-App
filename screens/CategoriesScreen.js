import React from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'

import { CATEGORIES } from '../data/dummy-data'
import CategoryItem from '../components/CategoryItem'

const CategoriesScreen = props => {
  const { navigation } = { ...props }
  const navigateCategory = item => {
    navigation.navigate({ routeName: 'Meals' })
  }
  return (
    <FlatList
      numColumns='2'
      data={CATEGORIES}
      renderItem={itemData => (
        <CategoryItem
          item={itemData.item}
          onPress={navigateCategory.bind(this, itemData.item)}
        />
      )}
    />
  )
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CategoriesScreen
