import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetails from '../screens/MealDetailsScreen'

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  Meals: CategoryMealsScreen,
  MealDetails: MealDetails
})

export default createAppContainer(MealsNavigator)
