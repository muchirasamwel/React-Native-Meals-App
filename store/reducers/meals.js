import { MEALS } from '../../data/dummy-data'
import { TOGGLE_FAV } from '../actions/meals'
const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
}

const mealReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TOGGLE_FAV:
      let meals = state.meals.map(meal => {
        if (meal.id == actions.mealId) {
          const fav = meal.hasOwnProperty('fav') ? !meal.fav : true
          meal = { ...meal, fav: fav }
        }
        return meal
      })
      return { ...state, meals: meals }
    default:
      return state
  }
}

export default mealReducer
