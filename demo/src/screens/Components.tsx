import * as React from 'react'
import {
  Container,
  Screen,
  Section,
  ListItem,
  Text,
  Constants,
  Avatar,
  Button,
  Toaster,
} from '@kancha/kancha-ui'
import { NavigationScreen, Screens } from '../navigators'
import TEST_ID from '../../../e2e/testIDs'
import { Colors } from '../theme'

// tslint:disable-next-line:no-var-requires
const avatar1 = require('../assets/images/kitten-avatar.jpg')

// tslint:disable-next-line:no-var-requires
const avatar2 = require('../assets/images/kitten-avatar-2.jpg')

const Components: React.FC<NavigationScreen> = props => {
  return (
    <Screen scrollEnabled={true}>
      <Container paddingTop={50} testID={TEST_ID.WELCOME}>
        <Text bold={true} textAlign={'center'} type={Constants.TextTypes.H3}>
          🚀Welcome to Kancha Demo! 🎉
        </Text>
      </Container>
      <Section title={'Components'}>
        <ListItem onPress={() => props.navigation.navigate(Screens.Screen)}>Screen</ListItem>
        <ListItem onPress={() => props.navigation.navigate(Screens.Container)}>Bottom Sheet</ListItem>
        <ListItem onPress={() => props.navigation.navigate(Screens.Text)}>Text</ListItem>
        <ListItem onPress={() => props.navigation.navigate(Screens.Button)}>Button</ListItem>
        <ListItem onPress={() => props.navigation.navigate(Screens.Dummy)}>Icon</ListItem>
        <ListItem onPress={() => props.navigation.navigate(Screens.ListItem)}>List Item</ListItem>
        <ListItem onPress={() => props.navigation.navigate(Screens.Dummy)}>Log Item</ListItem>
        <ListItem onPress={() => props.navigation.navigate('Modal')}>Modal</ListItem>
        <ListItem onPress={() => props.navigation.navigate(Screens.Credential)}>Credentials</ListItem>
        <ListItem onPress={() => props.navigation.navigate(Screens.Request)}>Request</ListItem>
        <ListItem onPress={() => props.navigation.navigate(Screens.ActivityFeed)}>Activity Feed</ListItem>
        <ListItem onPress={() => props.navigation.navigate(Screens.Messages)} last={true}>
          Messages
        </ListItem>
      </Section>
      <Section title={'Toast Messages'}>
        <Container padding={true} flexDirection={'row'} justifyContent={'space-between'}>
          <Button
            fullWidth={true}
            onPress={() => Toaster.info('Info toast', 'Just letting you know that some stuff is done')}
            buttonText={'Info'}
            type={Constants.BrandOptions.Primary}
            block={Constants.ButtonBlocks.Filled}
          />
          <Button
            fullWidth={true}
            onPress={() => Toaster.confirm('Success', 'You completed an action!')}
            buttonText={'Confirm'}
            type={Constants.BrandOptions.Confirm}
            block={Constants.ButtonBlocks.Filled}
          />
          <Button
            fullWidth={true}
            onPress={() => Toaster.warn('Crap', "This doesn't look good to me... :")}
            buttonText={'Confirm'}
            type={Constants.BrandOptions.Accent}
            block={Constants.ButtonBlocks.Filled}
          />
          <Button
            fullWidth={true}
            onPress={() => Toaster.error('Uh oh', 'Hmm, something has gone very wrong :(')}
            buttonText={'Error'}
            type={Constants.BrandOptions.Warning}
            block={Constants.ButtonBlocks.Filled}
          />
        </Container>
      </Section>
      <Section title={'Identicon Avatars'}>
        <Container alignItems={'center'} padding={true} flexDirection={'row'} justifyContent={'space-evenly'}>
          <Avatar
            address={'0x0f10E18715EA6F26Cf90Fd4684FdFC8c0658F9eb'}
            size={16}
            backgroundColor={'white'}
          />
          <Avatar
            address={'0x62Da59a6524C005960Dca819e57460934472055f'}
            size={24}
            backgroundColor={'white'}
          />
          <Avatar
            address={'0x3136847057b8987EEDa1E459A4667fE66685f81e'}
            size={32}
            gravatarType={'monsterid'}
            backgroundColor={'white'}
          />
          <Avatar
            address={'0xB824D642Cf094AdB93606F589c125B5f5ffB8717'}
            size={40}
            gravatarType={'robohash'}
            backgroundColor={'white'}
          />
          <Avatar
            address={'0xe56CFDAb1110c7e2D4d9372A9fB908b4CEF28ae3'}
            size={48}
            gravatarType={'retro'}
            backgroundColor={'white'}
          />
          <Avatar
            address={'0x98767e3d329f276d5376Edb77a84a572957e809A'}
            size={56}
            gravatarType={'wavatar'}
            backgroundColor={'white'}
          />
        </Container>
      </Section>
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
          <Avatar source={avatar2} size={16} type={'rounded'} />
          <Avatar source={avatar2} size={24} type={'rounded'} />
          <Avatar source={avatar2} size={32} type={'rounded'} />
          <Avatar source={avatar2} size={40} type={'rounded'} />
          <Avatar source={avatar2} size={48} type={'rounded'} />
          <Avatar source={avatar2} size={56} type={'rounded'} />
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
    </Screen>
  )
}

export default Components
