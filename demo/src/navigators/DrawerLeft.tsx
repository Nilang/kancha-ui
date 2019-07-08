import * as React from 'react'
import { ScrollView } from 'react-native'
import { Text, Container, Avatar, withTheme, Section, MenuItem, Constants } from '@kancha/kancha-ui'

interface DrawerProps {
  onItemPress: (scene: any) => void
  activeItemkey: string | undefined
  theme: any
}

/**
 * Custom drawer implemenation using Kancha components
 */
const Drawer: React.FC<DrawerProps> = () => {
  return (
    <Container flex={1} background={'primary'}>
      <Container
        background={'primary'}
        padding={true}
        flexDirection={'row'}
        alignItems={'center'}
        marginTop={50}
      >
        <Avatar title={'Jack'} border={true} size={40} />
        <Container paddingLeft={10}>
          <Text bold={true} type={Constants.TextTypes.Body}>
            Jason Healy
          </Text>
          <Container>
            <Text type={Constants.TextTypes.SubTitle}>0xfdh44hdud88dshs333...</Text>
          </Container>
        </Container>
      </Container>
      <ScrollView>
        <Container>
          <Section noTopMargin={true}>
            <MenuItem icon={{ name: 'codesquareo', iconFamily: 'AntDesign' }} onPress={() => ''}>
              Menu Item
            </MenuItem>
            <MenuItem active={true} icon={{ name: 'staro', iconFamily: 'AntDesign' }} onPress={() => ''}>
              Menu Item
            </MenuItem>
            <MenuItem icon={{ name: 'smileo', iconFamily: 'AntDesign' }} onPress={() => ''}>
              Menu Item
            </MenuItem>
            <MenuItem icon={{ name: 'hearto', iconFamily: 'AntDesign' }} onPress={() => ''}>
              Menu Item
            </MenuItem>
            <MenuItem icon={{ name: 'bells', iconFamily: 'AntDesign' }} onPress={() => ''}>
              Menu Item
            </MenuItem>
          </Section>
        </Container>
      </ScrollView>
    </Container>
  )
}

export default withTheme(Drawer)
