import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { HeadText } from './CustomTexts'

const EmptyListItem = props => {
  return (
    <View style={styles.screen}>
      <View style={styles.imageCover}>
        <Image
          style={styles.emptyImage}
          source={require('../assets/images/food.png')}
        />
      </View>
      <HeadText style={styles.emptyText}>{props.title}</HeadText>
    </View>
  )
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyText: {
    textAlign: 'center',
    width: '70%'
  },
  imageCover: {
    marginTop: -60,
    // backgroundColor: 'wheat',
    alignItems: 'center',
    width: '100%',
    height: 300
  },
  emptyImage: {
    width: '80%',
    height: '100%',
    resizeMode: 'contain'
  }
})

export default EmptyListItem
