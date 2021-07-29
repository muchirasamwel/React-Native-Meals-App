export const UPDATE = 'Update_Filters'

export const updateFilters = newFilters => {
  return { type: UPDATE, filters: newFilters }
}
