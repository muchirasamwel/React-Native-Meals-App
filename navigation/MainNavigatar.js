import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { StyleSheet, View } from 'react-native'
import Colors from '../constants/Colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import CustomDrawer from './CustomDrawer'
import {
  MealsNavigator,
  FavNavigator,
  FiltersNavigator
} from './MealsNavigator'

const TabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: tabBarInfo => {
          return (
            <View style={tabBarInfo.focused ? styles.tabIconA : styles.tabIcon}>
              <Icon name='silverware' size={30} color={tabBarInfo.tintColor} />
            </View>
          )
        }
      }
    },
    Favourites: {
      screen: FavNavigator,
      navigationOptions: {
        tabBarLabel: 'Favorites!',
        tabBarIcon: tabBarInfo => {
          return (
            <View style={tabBarInfo.focused ? styles.tabIconA : styles.tabIcon}>
              <Icon name='star' size={30} color={tabBarInfo.tintColor} />
            </View>
          )
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.redish,
      labelStyle: {
        fontFamily: 'poppin-medium'
      }
    }
  }
)

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: TabNavigator,
      navigationOptions: {
        drawerLabel: 'Home',
        drawerIcon: item => {
          return (
            <View>
              <Icon
                name='home'
                size={25}
                color={item.focused ? Colors.redish : Colors.secondary}
              />
            </View>
          )
        }
      }
    },
    Filters: {
      screen: FiltersNavigator,
      navigationOptions: {
        drawerLabel: 'Filters',
        drawerIcon: item => {
          return (
            <View>
              <Icon
                name='tune'
                size={25}
                color={item.focused ? Colors.redish : Colors.secondary}
              />
            </View>
          )
        }
      }
    }
  },
  {
    drawerType: 'back',
    drawerWidth: '80%',
    contentComponent: props => <CustomDrawer {...props} />,
    contentOptions: {
      activeTintColor: Colors.redish,
      labelStyle: {}
    }
  }
)

const styles = StyleSheet.create({
  tabIcon: {
    marginTop: 5
  },
  tabIconA: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 45,
    height: 45,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 22.5,
    overflow: 'hidden',
    backgroundColor: Colors.bg,
    marginTop: -35
  }
})

export default createAppContainer(DrawerNavigator)
