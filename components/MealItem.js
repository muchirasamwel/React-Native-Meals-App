import React from 'react'
import { View, StyleSheet, Platform, Image } from 'react-native'

import { CustomText, HeadText } from './CustomTexts'
import Colors from '../constants/Colors'
import Touch from './Touch'

const CategoryItem = props => {
  return (
    <View style={styles.category}>
      <View style={styles.touchWrapper}>
        <Touch onPress={props.onPress}>
          {/* <ImageBackground
            style={styles.itemBackground}
            source={{ url: props.meal.imageUrl }}
          > */}
          <View style={styles.itemContainer}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={{ uri: props.meal.imageUrl }}
              />
            </View>
            <HeadText style={styles.textHead} numberOfLines={1}>
              {props.meal.title}
            </HeadText>
            <CustomText style={styles.text}>
              {props.meal.affordability.capitalize()}
            </CustomText>
            <View style={styles.textGroup}>
              <CustomText style={styles.text}>
                {props.meal.complexity.capitalize()}
              </CustomText>
              <CustomText style={styles.textMin}>
                {props.meal.duration}mins
              </CustomText>
            </View>
          </View>
          {/* </ImageBackground> */}
        </Touch>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  category: {
    height: 250,
    flex: 1,
    margin: 10,
    borderRadius: 10,
    backgroundColor: Colors.bg,
    overflow: Platform.OS == 'android' ? 'hidden' : 'visible',

    shadowRadius: 3,
    shadowColor: Colors.secondary,
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.3,
    elevation: 3
  },
  itemBackground: {
    flex: 1,
    resizeMode: 'cover'
  },
  imageContainer: {
    padding: 5,
    flex: 1,
    width: '100%',
    alignItems: 'center'
  },
  itemContainer: {
    padding: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    width: '100%',
    height: '100%'
    // flex: 1
    // backgroundColor: 'rgba(0,0,0,0.2)'
  },
  textHead: {
    textAlign: 'left',
    color: Colors.warning,
    fontSize: 15
  },
  textGroup: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textMin: {
    textAlign: 'right',
    color: Colors.secondary,
    fontSize: 12
  },
  text: {
    textAlign: 'left',
    color: Colors.primary,
    fontSize: 12
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 15
  },
  touchWrapper: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 10
  }
})

export default CategoryItem
