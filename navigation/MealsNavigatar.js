import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { Platform, StyleSheet, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import MealDetails from '../screens/MealDetailsScreen'
import Colors from '../constants/Colors'
import CustomHeaderButton from '../components/CustomHeaderButton'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FiltersScreen from '../screens/FiltersScreen'
const DefaultStackOptions = {
  cardStyle: {
    backgroundColor: 'white'
  },
  headerStyle: {
    backgroundColor: Platform.OS == 'ios' ? 'white' : Colors.redish
  },
  headerTitleStyle: {
    fontFamily: 'poppin-bold'
  },
  headerBackTitleStyle: {
    fontFamily: 'poppin-regular'
  },
  headerTintColor: Platform.OS == 'ios' ? Colors.redish : 'white'
}

const MenuIcon = ({ iconName, onPress }) => {
  return (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item iconName={iconName} onPress={onPress} />
    </HeaderButtons>
  )
}

const mealNavigationOptions = navigation => {
  return {
    title: `${navigation.state.params.mealName}`,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          iconName={
            navigation.getParam('fav') == true ? 'star' : 'star-outline'
          }
          onPress={navigation.getParam('toggleFav')}
        />
      </HeaderButtons>
    )
  }
}

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: tabDetails => {
        return {
          headerTitle: 'Food Categories',
          headerLeft: () => {
            return (
              <MenuIcon
                iconName='menu'
                onPress={() => {
                  tabDetails.navigation.openDrawer()
                }}
              />
            )
          }
        }
      }
    },
    Meals: {
      screen: CategoryMealsScreen,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.name} Meals`
      })
    },
    MealDetails: {
      screen: MealDetails,
      navigationOptions: ({ navigation }) => {
        return mealNavigationOptions(navigation)
      }
    }
  },
  {
    defaultNavigationOptions: DefaultStackOptions
  }
)
const FavNavigator = createStackNavigator(
  {
    Favourites: {
      screen: FavoritesScreen,
      navigationOptions: {
        title: 'Favourites'
      }
    },
    MealDetails: {
      screen: MealDetails,
      navigationOptions: ({ navigation }) => {
        return mealNavigationOptions(navigation)
      }
    }
  },
  {
    defaultNavigationOptions: DefaultStackOptions
  }
)
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

const FiltersNavigator = createStackNavigator(
  {
    Filters: {
      screen: FiltersScreen,
      navigationOptions: navData => {
        return {
          title: 'Filters settings',
          headerLeft: (
            <MenuIcon
              iconName='menu'
              onPress={() => {
                navData.navigation.openDrawer()
              }}
            />
          ),
          headerRight: (
            <MenuIcon
              iconName='content-save'
              onPress={navData.navigation.getParam('save')}
            />
          )
        }
      }
    }
  },
  {
    defaultNavigationOptions: DefaultStackOptions
  }
)

const DrawerNavigator = createDrawerNavigator(
  {
    Home: TabNavigator,
    Filters: FiltersNavigator
  },
  {
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
