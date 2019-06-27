import {
  createStackNavigator,
  createAppContainer,
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation'

import App from '../screens/App'

import Components from '../screens/Components'
import Screen from '../screens/components/Screen'
import Button from '../screens/components/Button'
import Text from '../screens/components/Text'
import Container from '../screens/components/Container'
import Icon from '../screens/components/Icon'
import LogItem from '../screens/components/LogItem'
import ListItem from '../screens/components/ListItem'
import Scanner from '../screens/components/Scanner'

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

const AppNavigator = createStackNavigator(
  {
    [Screens.Home]: {
      screen: Components,
      navigationOptions: {
        title: 'Components',
      },
    },
    [Screens.Screen]: Screen,
    [Screens.Button]: Button,
    [Screens.ListItem]: ListItem,
    [Screens.Text]: Text,
    [Screens.LogItem]: LogItem,
    [Screens.Icon]: Icon,
    [Screens.Container]: Container,
    [Screens.Scanner]: Scanner,
  },
  {
    initialRouteName: Screens.Home,
  },
)

export default createAppContainer(AppNavigator)
