import * as React from 'react'
import { Container, Screen, Section, ListItem, Text, Constants, FabButton, Avatar } from '@kancha/kancha-ui'
import { NavigationScreen, Screens } from '../navigators'
import TEST_ID from '../../../e2e/testIDs'
import { Colors } from '../theme'

// tslint:disable-next-line:no-var-requires
const avatar1 = require('../assets/images/kitten-avatar.jpg')

// tslint:disable-next-line:no-var-requires
const avatar2 = require('../assets/images/kitten-avatar-2.jpg')

const Components: React.FC<NavigationScreen> = props => {
  return (
    <Screen
      scrollEnabled={true}
      fabButton={
        <Container alignItems={'center'} justifyContent={'flex-end'} flex={1}>
          <FabButton
            onPress={() => props.navigation.push(Screens.Scanner)}
            icon={{ name: 'ios-qr-scanner', iconFamily: 'Ionicons' }}
            size={80}
          />
        </Container>
      }
    >
      <Container paddingTop={50} testID={TEST_ID.WELCOME}>
        <Text bold={true} textAlign={'center'} type={Constants.TextTypes.H3}>
          🚀Welcome to Kancha Demo! 🎉
        </Text>
      </Container>
      <Section title={'Rounded Image Avatars'}>
        <Container alignItems={'center'} padding={true} flexDirection={'row'} justifyContent={'space-evenly'}>
          <Avatar source={avatar1} size={16} />
          <Avatar source={avatar1} size={24} />
          <Avatar source={avatar1} size={32} />
          <Avatar source={avatar1} size={40} />
          <Avatar source={avatar1} size={48} />
          <Avatar source={avatar1} size={56} />
        </Container>
      </Section>
      <Section title={'Square Image Avatars'}>
        <Container alignItems={'center'} padding={true} flexDirection={'row'} justifyContent={'space-evenly'}>
          <Avatar source={avatar2} size={16} type={'square'} />
          <Avatar source={avatar2} size={24} type={'square'} />
          <Avatar source={avatar2} size={32} type={'square'} />
          <Avatar source={avatar2} size={40} type={'square'} />
          <Avatar source={avatar2} size={48} type={'square'} />
          <Avatar source={avatar2} size={56} type={'square'} />
        </Container>
      </Section>
      <Section title={'Text Avatars'}>
        <Container alignItems={'center'} padding={true} flexDirection={'row'} justifyContent={'space-evenly'}>
          <Avatar size={16} title={'Jack'} />
          <Avatar size={24} title={'Sarah'} />
          <Avatar size={32} title={'Alice'} />
          <Avatar size={40} title={'Nakamoto'} backgroundColor={Colors.ACCENT} />
          <Avatar size={48} title={'Satoshi'} backgroundColor={Colors.MY_CUSTOM_COLOR} />
          <Avatar size={56} title={'Bob'} backgroundColor={Colors.DARK_GREY} />
        </Container>
      </Section>
      <Section title={'Components'}>
        <ListItem onPress={() => props.navigation.push(Screens.Screen)}>Screen</ListItem>
        <ListItem onPress={() => props.navigation.push(Screens.Container)}>Container</ListItem>
        <ListItem onPress={() => props.navigation.push(Screens.Text)}>Text</ListItem>
        <ListItem onPress={() => props.navigation.push(Screens.Dummy)}>Button</ListItem>
        <ListItem onPress={() => props.navigation.push(Screens.Dummy)}>Icon</ListItem>
        <ListItem onPress={() => props.navigation.push(Screens.ListItem)}>List Item</ListItem>
        <ListItem onPress={() => props.navigation.push(Screens.Dummy)} last={true}>
          Log Item
        </ListItem>
      </Section>
    </Screen>
  )
}

export default Components
