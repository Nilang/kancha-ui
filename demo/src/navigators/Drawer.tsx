import * as React from 'react'
import { ScrollView, TouchableHighlight } from 'react-native'
import { Text, Container, Icon, Avatar, withTheme, ListItem, Section, Constants } from '@kancha/kancha-ui'
import { Colors } from '../theme'

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
    <Container flex={1} background={'secondary'}>
      <ScrollView>
        <Container
          background={'secondary'}
          padding={true}
          flexDirection={'row'}
          alignItems={'center'}
          marginTop={50}
        >
          <Avatar address={'0x2dgu'} border={true} size={48} type={'rounded'} />
          <Container paddingLeft={10}>
            <Text bold={true} type={Constants.TextTypes.H3}>
              Jason Healy
            </Text>
            <Container marginTop={3}>
              <Text type={Constants.TextTypes.SubTitle}>0xfdh44hdud88dshs333...</Text>
            </Container>
          </Container>
        </Container>
        <Container>
          <Section noTopMargin={true}>
            <ListItem
              iconLeft={
                <Icon color={Colors.CHARCOAL} icon={{ name: 'ios-settings', iconFamily: 'Ionicons' }} />
              }
            >
              Settings
            </ListItem>
            <ListItem
              last={true}
              iconLeft={
                <Icon color={Colors.CHARCOAL} icon={{ name: 'ios-settings', iconFamily: 'Ionicons' }} />
              }
            >
              Settings
            </ListItem>
          </Section>
          <Section>
            <ListItem>Menu Item</ListItem>
            <ListItem>Menu Item</ListItem>
            <ListItem>Menu Item</ListItem>
            <ListItem last={true}>Menu Item</ListItem>
          </Section>
          <Section>
            <ListItem>Menu Item</ListItem>
            <ListItem last={true}>Menu Item</ListItem>
          </Section>
        </Container>
      </ScrollView>
    </Container>
  )
}

export default withTheme(Drawer)
