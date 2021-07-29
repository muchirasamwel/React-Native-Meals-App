import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import * as Font from 'expo-font'
import Apploading from 'expo-app-loading'
import { enableScreens } from 'react-native-screens'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import MealsNavigatar from './navigation/MealsNavigatar'
import mealsReducer from './store/reducers/meals'
import filterReducer from './store/reducers/filters'

import { LogBox } from 'react-native'
// LogBox.ignoreAllLogs()
enableScreens()

const mainReducer = combineReducers({
  mealsStore: mealsReducer,
  filtersStore: filterReducer
})

const store = createStore(mainReducer)

export default function App () {
  const [fontLoaded] = Font.useFonts({
    bulleto: require('./assets/fonts/bulletto/Bulletto.ttf'),
    'poppin-regular': require('./assets/fonts/poppins/Poppins-Regular.ttf'),
    'poppin-bold': require('./assets/fonts/poppins/Poppins-Bold.ttf'),
    'poppin-medium': require('./assets/fonts/poppins/Poppins-Medium.ttf'),
    'poppin-light': require('./assets/fonts/poppins/Poppins-Light.ttf')
  })

  if (!fontLoaded) {
    return <Apploading />
  }
  String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1)
  }
  return (
    <Provider store={store}>
      <View style={styles.appContainer}>
        <MealsNavigatar />
      </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  }
})
