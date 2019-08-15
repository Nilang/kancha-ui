import * as React from 'react'
import { Container, Screen, Credential } from '@kancha/kancha-ui'
import { NavigationScreen } from '../../navigators'
import TEST_ID from '../../../../e2e/testIDs'

// tslint:disable-next-line:no-var-requires
const avatar1 = require('../../assets/images/kitten-avatar.jpg')

const Component: React.FC<NavigationScreen> = ({ navigation }) => {
  const credentials = [
    {
      title: 'Aerospace Engineer',
      issuer: 'Nasa',
      logo: avatar1,
      onPress: () => navigation.navigate('Modal'),
    },
    {
      title: 'Expert Baker',
      issuer: 'Google',
      logo: avatar1,
      onPress: () => navigation.navigate('Modal'),
    },
    {
      title: 'Network Maintenance',
      issuer: 'Cern',
      logo: avatar1,
      onPress: () => navigation.navigate('Modal'),
    },
    {
      title: 'Credit Worthy',
      issuer: 'Deutsche Bank',
      logo: avatar1,
      onPress: () => navigation.navigate('Modal'),
    },
  ]

  return (
    <Screen safeArea={true} scrollEnabled={true}>
      <Container testID={TEST_ID.WELCOME} padding={true}>
        {credentials.map((credential, index) => {
          return <Credential key={index} {...credential} />
        })}
      </Container>
    </Screen>
  )
}

export default Component
