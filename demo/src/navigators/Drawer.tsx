import * as React from 'react'
import { ScrollView, TouchableHighlight, SafeAreaView } from 'react-native'
import { Text, Container, Icon, Avatar, withTheme } from '@kancha/kancha-ui'

const MAIN_SCREENS = [
  {
    route: {
      key: 'Main',
      routeName: 'Main',
    },
    title: 'Credentials',
    icon: {
      name: 'ios-settings',
      iconFamily: 'Ionicons',
    },
  },
  {
    route: {
      key: 'Connections',
      routeName: 'Connections',
    },
    title: 'Connections',
    icon: {
      name: 'ios-settings',
      iconFamily: 'Ionicons',
    },
  },
  {
    route: {
      key: 'Profile',
      routeName: 'Profile',
    },
    title: 'Profile',
    icon: {
      name: 'ios-settings',
      iconFamily: 'Ionicons',
    },
  },
  {
    route: {
      key: 'Moon Landing',
      routeName: 'Moon Landing',
    },
    title: 'Moon Landing',
    icon: {
      name: 'ios-settings',
      iconFamily: 'Ionicons',
    },
  },
]

const SETTINGS_SCREENS = [
  {
    route: {
      key: 'Credentials',
      routeName: 'Credentials',
    },
    title: 'Credentials',
    icon: {
      name: 'ios-settings',
      iconFamily: 'Ionicons',
    },
  },
  {
    route: {
      key: 'Connections',
      routeName: 'Connections',
    },
    title: 'Connections',
    icon: {
      name: 'ios-settings',
      iconFamily: 'Ionicons',
    },
  },
]

interface DrawerProps {
  onItemPress: (scene: any) => void
  activeItemkey: string | undefined
  theme: any
}

const MenuItem = (props: any) => {
  return (
    <TouchableHighlight>
      <Container
        backgroundColor={props.active && '#FAFAFA'}
        flexDirection={'row'}
        paddingLeft={true}
        paddingTop={5}
        paddingBottom={5}
        justifyContent={'center'}
        alignItems={'center'}
      >
        {props.icon && (
          <Container>
            <Icon icon={props.icon} size={24} />
          </Container>
        )}
        <Container flex={1} paddingLeft={true}>
          <Text>{props.children}</Text>
        </Container>
      </Container>
    </TouchableHighlight>
  )
}

/**
 * Custom drawer implemenation using Kancha components
 */
const Drawer: React.FC<DrawerProps> = props => {
  return (
    <Container flex={1}>
      <SafeAreaView style={{ backgroundColor: props.theme.colors.secondary.background }} />
      <ScrollView style={{ backgroundColor: props.theme.colors.primary.background }}>
        <Container background={'secondary'} padding={true} flexDirection={'row'} alignItems={'center'}>
          <Avatar address={'0x2dgu'} border={true} size={48} />
          <Container paddingLeft={10}>
            <Text textStyle={{ fontSize: 18, paddingBottom: 3 }}>Jason Healy</Text>
            <Text textStyle={{ fontSize: 12 }}>0xfdh44hdud88dshs333jh90s...</Text>
          </Container>
        </Container>
        <Container dividerBottom={true} dividerTop={true}>
          {MAIN_SCREENS.map(route => {
            return (
              <MenuItem
                key={route.route.key}
                icon={route.icon}
                active={props.activeItemkey === route.route.key}
              >
                {route.title}
              </MenuItem>
            )
          })}
        </Container>
        <Container>
          {SETTINGS_SCREENS.map(route => {
            return (
              <MenuItem key={route.route.key} icon={route.icon}>
                {route.title}
              </MenuItem>
            )
          })}
        </Container>
      </ScrollView>
      <SafeAreaView style={{ flex: 1, backgroundColor: props.theme.colors.primary.background }} />
    </Container>
  )
}

export default withTheme(Drawer)
