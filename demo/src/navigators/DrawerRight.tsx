import * as React from 'react'
import { ScrollView } from 'react-native'
import { Text, Container, Icon, Avatar, withTheme, ListItem, Section, Constants } from '@kancha/kancha-ui'
import { Colors } from '../theme'

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
