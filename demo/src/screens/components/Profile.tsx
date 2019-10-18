import * as React from 'react'
import { Container, Screen, Text, Avatar, Constants } from '@kancha/kancha-ui'
import { NavigationScreen } from '../../navigators'

const avatar1 = require('../../assets/images/kitten-avatar.jpg')

const Component: React.FC<NavigationScreen> = props => {
  const { navigation } = props
  const id = navigation.getParam('id', 'No ID was passed')
  return (
    <Screen safeArea={true} scrollEnabled={true} background={'primary'}>
      <Container padding>
        <Container marginTop={20}>
          <Avatar source={avatar1} type={'rounded'} size={60} />
        </Container>
        <Container marginTop>
          <Text type={Constants.TextTypes.H3} bold>
            A Profile Screen
          </Text>
          <Text type={Constants.TextTypes.SubTitle}>{id}</Text>
        </Container>
      </Container>
    </Screen>
  )
}

export default Component
