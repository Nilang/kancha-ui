import * as React from 'react'
import { Container, Constants, Button, Icon } from '@kancha/kancha-ui'
import { Icons, Colors } from '../theme'

import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation'

import ComponentsScreen from '../screens/Components'
import ScreenScreen from '../screens/components/Screen'
import ButtonScreen from '../screens/components/Button'
import TextScreen from '../screens/components/Text'
import ContainerScreen from '../screens/components/Container'
import IconScreen from '../screens/components/Icon'
import LogItemScreen from '../screens/components/LogItem'
import ListItemScreen from '../screens/components/ListItem'
import ScannerScreen from '../screens/components/Scanner'

export interface NavigationScreen {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

export const Screens = {
  Home: 'Home',
  Screen: 'Screen',
  Text: 'Text',
  Button: 'Button',
  Container: 'Container',
  Icon: 'Icon',
  LogItem: 'LogItem',
  ListItem: 'ListItem',
  Scanner: 'Scanner',
  Dummy: 'Dummy',
}

const DrawerMenuButton = (navigation: any) => (
  <Container paddingLeft={true}>
    <Button
      onPress={() => navigation.openDrawer()}
      block={Constants.ButtonBlocks.Clear}
      iconButton={true}
      icon={<Icon icon={Icons.MENU} size={32} color={Colors.CHARCOAL} />}
    />
  </Container>
)

const MainNavigator = createStackNavigator({
  [Screens.Home]: {
    screen: ComponentsScreen,
    navigationOptions: ({ navigation }: any) => {
      return {
        title: 'Components',
        headerLeft: DrawerMenuButton(navigation),
      }
    },
  },
  [Screens.Screen]: ScreenScreen,
  [Screens.Button]: ButtonScreen,
  [Screens.ListItem]: ListItemScreen,
  [Screens.Text]: TextScreen,
  [Screens.LogItem]: LogItemScreen,
  [Screens.Icon]: IconScreen,
  [Screens.Container]: ContainerScreen,
})

const DrawerNavigator = createDrawerNavigator({
  Main: MainNavigator,
})

const RootNavigator = createStackNavigator(
  {
    Main: DrawerNavigator,
    [Screens.Scanner]: {
      screen: ScannerScreen,
    },
  },
  {
    initialRouteName: 'Main',
    mode: 'modal',
    headerMode: 'none',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
      },
    }),
  },
)

export default createAppContainer(RootNavigator)
