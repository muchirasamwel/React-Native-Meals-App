import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

import { SuperText } from './CustomTexts'
import Colors from '../constants/Colors'
import Touch from './Touch'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const CategoryItem = props => {
  return (
    <View style={styles.category}>
      <View style={styles.touchWrapper}>
        <Touch onPress={props.onPress}>
          <View style={styles.itemContainer}>
            <View style={styles.logoContainer}>
              <Image
                style={styles.image}
                source={require('../assets/images/eating.png')}
              />
              {/* <Icon
                style={styles.icon}
                name='food'
                size={100}
                color={Colors.bg}
              /> */}
            </View>
            <SuperText style={styles.text}>{props.item.name}</SuperText>
          </View>
        </Touch>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  category: {
    height: 200,
    flex: 1,
    margin: 15,
    borderRadius: 10,
    backgroundColor: 'white',

    shadowRadius: 3,
    shadowColor: Colors.secondary,
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.3,
    elevation: 5
  },
  touchWrapper: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 10
  },
  itemContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
    paddingBottom: 10
  },
  text: {
    textAlign: 'center',
    fontSize: 22,
    color: Colors.warning
  },
  logoContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  superLetter: {
    fontSize: 40,
    color: Colors.bg
  },
  imageContainer: {
    width: 100,
    height: 100
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  icon: {
    borderWidth: 2,
    borderColor: Colors.bg,
    borderRadius: 50
  }
})

export default CategoryItem
