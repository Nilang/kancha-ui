import * as React from 'react'
import { ScrollView, TouchableHighlight, SafeAreaView } from 'react-native'

import Container from '../Container/Container'
import Text from '../Text/Text'
import Icon, { IconConfig } from '../Icon/Icon'

interface DrawerScreen {
  icon?: IconConfig
  title: string
  route: any
}

interface DrawerProps {
  headerComponent?: React.ReactNode
  screens: DrawerScreen[]
  settingScreens?: DrawerScreen[]
  onItemPress: (scene: { route: any; focused: boolean }) => void
}

const Drawer: React.FC<DrawerProps> = props => {
  // tslint:disable-next-line:no-console
  console.log(props)

  return (
    <SafeAreaView>
      <ScrollView>
        {props.headerComponent && <Container>{props.headerComponent}</Container>}

        {props.screens &&
          props.screens.map((screen: DrawerScreen) => {
            return (
              <TouchableHighlight
                key={screen.route.key}
                onPress={() => props.onItemPress({ route: screen.route, focused: false })}
              >
                <Container>
                  {screen.icon && <Icon icon={screen.icon} />}
                  <Text>{screen.title}</Text>
                </Container>
              </TouchableHighlight>
            )
          })}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Drawer
