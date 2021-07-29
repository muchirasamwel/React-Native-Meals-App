import React from 'react'
import { useSelector } from 'react-redux'
import EmptyListItem from '../components/EmptyListItem'
import MealList from '../components/MealList'

const FavoritesScreen = props => {
  const allMeals = useSelector(state => state.mealsStore.meals)
  const meals = allMeals.filter(meal => meal.fav == true)

  let renderContent = <MealList meals={meals} navigation={props.navigation} />
  if (meals < 1) {
    renderContent = <EmptyListItem title='No Favorites saved yet.' />
  }

  return renderContent
}

export default FavoritesScreen
