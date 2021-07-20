import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import * as Font from 'expo-font'
import Apploading from 'expo-app-loading'

import { CustomText, HeadText, SuperText } from './components/CustomTexts'
import Colors from './constants/Colors'

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
  return (
    <View style={styles.container}>
      <SuperText>Spanish</SuperText>
      <HeadText>Categories</HeadText>
      <CustomText style={styles.normal}>details here</CustomText>
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  normal: {
    color: Colors.primary,
    fontSize: 15,
    fontFamily: 'poppin-medium'
  }
})
