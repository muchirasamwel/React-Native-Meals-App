import React, { useState } from 'react'

import MealList from '../components/MealList'

import { MEALS } from '../data/dummy-data'

const CategoryMealsScreen = props => {
  const { navigation } = { ...props }

  const categoryId = navigation.getParam('id')

  const getMeals = id => {
    return MEALS.filter(meal => meal.categoryIds.includes(id))
  }

  const [meals, setMeals] = useState(getMeals(categoryId))

  return <MealList navigation={props.navigation} meals={meals} />
}

export default CategoryMealsScreen
