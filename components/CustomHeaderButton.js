import React from 'react'
import { HeaderButton } from 'react-navigation-header-buttons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Platform } from 'react-native'
import Colors from '../constants/Colors'

const CustomHeaderButton = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Icon}
      iconSize={30}
      color={Platform.OS == 'android' ? Colors.bg : Colors.redish}
    />
  )
}

export default CustomHeaderButton
