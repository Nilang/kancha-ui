import * as React from 'react'
import { Container, Modal, ClaimExplore, Banner } from '@kancha/kancha-ui'
import { NavigationScreen } from '../../navigators'
import TEST_ID from '../../../../e2e/testIDs'

// tslint:disable-next-line:no-var-requires
const avatar1 = require('../../assets/images/kitten-avatar.jpg')

// tslint:disable-next-line:no-var-requires
const bannerImage = require('../../assets/images/abstract-blurred-gradient.jpg')

const claim = {
  iss: 'did:ethr:0xb9c5714089478a327f09197987f16f9e5d936e8a',
  sub: 'did:ethr:0xf3beac30c498d9e26865f34fcaa57dbb935b0d74',
  type: 'Sample Claim',
  iat: 1562769371,
  exp: 1579478400,
  claimType: 'Serto ID',
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

const Component: React.FC<NavigationScreen> = ({}) => {
  return (
    <Modal scrollEnabled={true}>
      <Container testID={TEST_ID.WELCOME}>
        <Banner
          size={'small'}
          title={'Kancha UI'}
          subTitle={'Identity Wallet UI Kit'}
          avatar={avatar1}
          backgroundImage={bannerImage}
        />
        <ClaimExplore claim={claim.claim} />
      </Container>
    </Modal>
  )
}

export default Component
