import React, { useCallback, useEffect, useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { CustomText, HeadText } from '../components/CustomTexts'
import EmptyListItem from '../components/EmptyListItem'

import MealList from '../components/MealList'

const CategoryMealsScreen = props => {
  const { navigation } = { ...props }

  const categoryId = navigation.getParam('id')
  const availableMeals = useSelector(state => state.mealsStore.meals)
  const filters = useSelector(state => state.filtersStore.filters)
  console.log('filters', filters)
  let meals = availableMeals.filter(meal =>
    meal.categoryIds.includes(categoryId)
  )
  meals = meals.filter(meal => {
    if (filters.glutenFree && !meal.isGlutenFree) return false
    if (filters.lactoseFree && !meal.isLactoseFree) return false
    if (filters.vegan && !meal.isVegan) return false
    if (filters.vegetarian && !meal.isVegetarian) return false
    return true
  })
  let content = <MealList navigation={props.navigation} meals={meals} />
  if (meals.length < 1) {
    content = (
      <EmptyListItem title='No food found based on your filters' />
      // <View>
      //   <CustomText>isGlutenFree: {filters.glutenFree.toString()}</CustomText>
      //   <CustomText>
      //     isLactoseFree: {filters.lactoseFree.toString()}
      //   </CustomText>
      //   <CustomText>isVegan: {filters.vegan.toString()}</CustomText>
      //   <CustomText>isVegetarian: {filters.vegetarian.toString()}</CustomText>
      // </View>
    )
  }

  return content
}

export default CategoryMealsScreen
