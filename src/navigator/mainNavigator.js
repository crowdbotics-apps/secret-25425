import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Settings221409Navigator from '../features/Settings221409/navigator';
import Settings221394Navigator from '../features/Settings221394/navigator';
import NotificationList221393Navigator from '../features/NotificationList221393/navigator';
import Maps221392Navigator from '../features/Maps221392/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
Settings221409: { screen: Settings221409Navigator },
Settings221394: { screen: Settings221394Navigator },
NotificationList221393: { screen: NotificationList221393Navigator },
Maps221392: { screen: Maps221392Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
