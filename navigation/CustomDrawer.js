import React from 'react'
import { StyleSheet, ScrollView, View, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { DrawerNavigatorItems } from 'react-navigation-drawer'
import { SuperText } from '../components/CustomTexts'
import Colors from '../constants/Colors'

const CustomDrawer = props => {
  return (
    <ScrollView>
      <SafeAreaView
        style={styles.screen}
        forceInset={{ top: 'always', horizontal: 'never' }}
      >
        <ImageBackground
          resizeMode='cover'
          style={styles.navHead}
          source={require('../assets/images/chef.png')}
        >
          <View style={styles.headContent}>
            <SuperText style={styles.headText}>Chef Masterly</SuperText>
          </View>
        </ImageBackground>
        <DrawerNavigatorItems {...props} style={styles.navItems} />
      </SafeAreaView>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  navHead: {
    // padding: 10,
    height: 200
  },
  navItems: {},
  headContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  headText: {
    color: Colors.warning
  }
})

export default CustomDrawer
