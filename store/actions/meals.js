export const TOGGLE_FAV = 'TOGGLE_FAVOURITE'

export const toggleFav = id => {
  return { type: TOGGLE_FAV, mealId: id }
}
