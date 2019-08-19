import * as React from 'react'
import { Container, Constants, Button, Icon } from '@kancha/kancha-ui'
import { Animated, Easing } from 'react-native'
import { Icons, Colors } from '../theme'
// import DrawerRight from './DrawerRight'
import DrawerLeft from './DrawerLeft'

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
import ModalScreen from '../screens/components/ModalScreen'
import ClaimDebug from '../screens/components/ClaimDebug'
import Request from '../screens/components/Request'
import CredentialScreen from '../screens/components/Credential'
import CredentialExplore from '../screens/components/CredentialExplore'

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
  ClaimDebug: 'ClaimDebug',
  Request: 'Request',
  Credential: 'Credential',
  CredentialExplore: 'CredentialExplore',
}

const DrawerMenuButton = (navigation: any) => (
  <Container paddingLeft={true} paddingRight={true}>
    <Button
      onPress={() => navigation.openDrawer()}
      block={Constants.ButtonBlocks.Clear}
      iconButton={true}
      icon={<Icon icon={Icons.MORE} size={32} color={Colors.CHARCOAL} />}
    />
  </Container>
)

const MainNavigator = createStackNavigator({
  [Screens.Home]: {
    screen: ComponentsScreen,
    navigationOptions: ({ navigation }: any) => {
      return {
        title: 'Components',
        headerRight: DrawerMenuButton(navigation),
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
  [Screens.ClaimDebug]: ClaimDebug,
  [Screens.Credential]: CredentialScreen,
})

/**
 * Right side drawer
 */
// const DrawerNavigator = createDrawerNavigator(
//   {
//     Main: MainNavigator,
//   },
//   {
//     drawerPosition: 'right',
//     contentComponent: props => {
//       // tslint:disable-next-line:no-console
//       // console.log(props)
//       return <DrawerRight onItemPress={props.onItemPress} activeItemkey={props.activeItemKey} />
//     },
//   },
// )

const DrawerNavigatorLeft = createDrawerNavigator(
  {
    Main: MainNavigator,
  },
  {
    contentComponent: props => {
      // tslint:disable-next-line:no-console
      // console.log(props)
      return <DrawerLeft onItemPress={props.onItemPress} activeItemkey={props.activeItemKey} />
    },
  },
)

const RootNavigator = createStackNavigator(
  {
    Main: DrawerNavigatorLeft,
    Modal: ModalScreen,
    [Screens.Scanner]: {
      screen: ScannerScreen,
    },
    [Screens.Request]: Request,
    [Screens.CredentialExplore]: CredentialExplore,
  },
  {
    initialRouteName: 'Main',
    mode: 'modal',
    headerMode: 'none',
    transparentCard: true,
    transitionConfig: (nextScene: any) => {
      return {
        transitionSpec: {
          duration: nextScene.scene.route.routeName === 'Scanner' ? 0 : 500,
          timing: Animated.timing,
          easing: Easing.out(Easing.poly(7)),
          useNativeDriver: true,
        },
      }
    },
  },
)

export default createAppContainer(RootNavigator)
