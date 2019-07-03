import * as React from 'react'
import { ScrollView, TouchableHighlight } from 'react-native'
import { Text, Container, Icon, Avatar, withTheme, Section, Constants } from '@kancha/kancha-ui'
import { Colors } from '../theme'
import hexToRgba from 'hex-to-rgba'

interface DrawerProps {
  onItemPress: (scene: any) => void
  activeItemkey: string | undefined
  theme: any
}

const MenuItem = withTheme((props: any) => {
  return (
    <TouchableHighlight onPress={props.onPress}>
      <Container
        viewStyle={{ borderTopRightRadius: 20, borderBottomRightRadius: 20 }}
        backgroundColor={props.active && hexToRgba(props.theme.colors.primary.brand, 0.1)}
        flexDirection={'row'}
        paddingLeft={true}
        paddingTop={10}
        paddingBottom={10}
        justifyContent={'center'}
        alignItems={'center'}
      >
        {props.icon && (
          <Container>
            <Icon
              icon={props.icon}
              size={18}
              color={props.active ? props.theme.colors.primary.brand : Colors.CHARCOAL}
            />
          </Container>
        )}
        <Container flex={1} paddingLeft={true}>
          <Text textColor={props.active && props.theme.colors.primary.brand}>{props.children}</Text>
        </Container>
      </Container>
    </TouchableHighlight>
  )
})

/**
 * Custom drawer implemenation using Kancha components
 */
const Drawer: React.FC<DrawerProps> = props => {
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
            <MenuItem icon={{ name: 'codesquareo', iconFamily: 'AntDesign' }}>Menu Item</MenuItem>
            <MenuItem active={true} icon={{ name: 'staro', iconFamily: 'AntDesign' }}>
              Menu Item
            </MenuItem>
            <MenuItem icon={{ name: 'smileo', iconFamily: 'AntDesign' }}>Menu Item</MenuItem>
            <MenuItem icon={{ name: 'hearto', iconFamily: 'AntDesign' }}>Menu Item</MenuItem>
            <MenuItem icon={{ name: 'bells', iconFamily: 'AntDesign' }}>Menu Item</MenuItem>
          </Section>
        </Container>
      </ScrollView>
    </Container>
  )
}

export default withTheme(Drawer)
