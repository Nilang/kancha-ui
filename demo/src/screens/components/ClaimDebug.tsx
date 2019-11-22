import * as React from 'react'
import { Container, Screen, ClaimDebug } from '@kancha/kancha-ui'
import { NavigationScreen } from '../../navigators'
import TEST_ID from '../../../../e2e/testIDs'

const claim = {
  iss: 'did:ethr:0xb9c5714089478a327f09197987f16f9e5d936e8a',
  sub: 'did:ethr:0xf3beac30c498d9e26865f34fcaa57dbb935b0d74',
  type: 'Serto ID',
  iat: 1562769371,
  exp: 1579478400,
  claim: {
    'Serto ID': {
      name: 'Sarah Adamson',
      dateOfBirth: '22-01-75',
      country: 'USA',
      children: [
        {
          name: 'Bob',
          age: 4,
        },
        {
          name: 'Alice',
          age: 9,
        },
      ],
    },
  },
  vc: [],
}

const Component: React.FC<NavigationScreen> = () => {
  return (
    <Screen scrollEnabled={true}>
      <Container testID={TEST_ID.WELCOME}>
        <ClaimDebug {...claim} cardView={true} revoked />
      </Container>
    </Screen>
  )
}

export default Component
