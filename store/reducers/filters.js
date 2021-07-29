import { UPDATE } from '../actions/filters'

let initialState = {
  filters: {
    glutenFree: true,
    lactoseFree: false,
    vegan: false,
    vegetarian: false
  }
}

const filterReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case UPDATE:
      return { ...state, filters: actions.filters }
    default:
      return state
  }
}

export default filterReducer
