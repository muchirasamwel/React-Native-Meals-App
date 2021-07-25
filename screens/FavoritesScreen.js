import React from 'react'
import MealList from '../components/MealList'

import { MEALS } from '../data/dummy-data'

const FavoritesScreen = props => {
  const meals = MEALS.filter(meal => meal.id == 'm1' || meal.id == 'm5')
  return <MealList meals={meals} navigation={props.navigation} />
}

export default FavoritesScreen
