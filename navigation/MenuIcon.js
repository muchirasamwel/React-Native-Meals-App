import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/CustomHeaderButton'

export const MenuIcon = ({ iconName, onPress }) => {
  return (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item iconName={iconName} onPress={onPress} />
    </HeaderButtons>
  )
}
