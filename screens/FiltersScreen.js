import { filter } from 'async'
import React, { useEffect, useState, useCallback } from 'react'
import { View, StyleSheet, Switch, Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { CustomText, SuperText } from '../components/CustomTexts'
import Colors from '../constants/Colors'
import { updateFilters } from '../store/actions/filters'

const FilterSwitch = props => {
  return (
    <View style={styles.filterSwitch}>
      <CustomText>{props.title}</CustomText>
      <Switch
        thumbColor={Colors.bg}
        trackColor={{ true: Colors.redish, false: '#e1e3e3' }}
        value={props.value}
        onValueChange={props.onChange}
      />
    </View>
  )
}
const FiltersScreen = props => {
  const filters = useSelector(state => state.filtersStore.filters)
  const [isGlutenFree, setIsGlutenFree] = useState(filters.glutenFree)
  const [isLactoseFree, setIsLactoseFree] = useState(filters.lactoseFree)
  const [isVegan, setIsVegan] = useState(filters.vegan)
  const [isVegetarian, setIsVegetarian] = useState(filters.vegetarian)

  const { navigation } = props
  const dispatch = useDispatch()
  const saveFilters = useCallback(() => {
    const SaveData = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian
    }
    dispatch(updateFilters(SaveData))
    Alert.alert('Success', 'Filters saved successfully', [
      { text: 'Okay', style: 'default' }
    ])
  }, [
    isVegetarian,
    isVegan,
    isGlutenFree,
    isLactoseFree,
    dispatch,
    updateFilters
  ])

  useEffect(() => {
    navigation.setParams({ save: saveFilters })
  }, [saveFilters])

  return (
    <View style={styles.screen}>
      <SuperText> Preferences</SuperText>
      <FilterSwitch
        title='Is Gluten Free'
        value={isGlutenFree}
        onChange={newVal => setIsGlutenFree(newVal)}
      />
      <FilterSwitch
        title='Is Lactose Free'
        value={isLactoseFree}
        onChange={newVal => setIsLactoseFree(newVal)}
      />
      <FilterSwitch
        title='Is Vegan'
        value={isVegan}
        onChange={newVal => setIsVegan(newVal)}
      />
      <FilterSwitch
        title='Is Vegetarian'
        value={isVegetarian}
        onChange={newVal => setIsVegetarian(newVal)}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  filterSwitch: {
    marginVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between'
  }
})

export default FiltersScreen
