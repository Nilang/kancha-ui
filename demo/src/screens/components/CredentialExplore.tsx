import * as React from 'react'
import { Modal, ClaimExplore, Banner } from '@kancha/kancha-ui'
import { NavigationScreen } from '../../navigators'
import { endOfTomorrow, getTime } from 'date-fns'

// tslint:disable-next-line:no-var-requires
const avatar1 = require('../../assets/images/kitten-avatar.jpg')

// tslint:disable-next-line:no-var-requires
const bannerImage = require('../../assets/images/abstract-blurred-gradient.jpg')

const jwt =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
const claim = {
  iss: 'did:ethr:0xb9c5714089478a327f09197987f16f9e5d936e8a',
  sub: 'did:ethr:0xf3beac30c498d9e26865f34fcaa57dbb935b0d74',
  type: 'Sample Claim',
  iat: 1562769371,
  exp: getTime(endOfTomorrow()),
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
      <Banner
        size={'small'}
        issuer={{ did: 'ethr:did:0x12', profileImage: '', shortId: 'Hello' }}
        title={'Kancha UI'}
        subTitle={'Identity Wallet UI Kit'}
        backgroundImage={bannerImage}
      />
      <ClaimExplore
        revoked={false}
        claim={claim.claim}
        jwt={jwt}
        qrText={'Present for scanning'}
        exp={claim.exp}
      />
    </Modal>
  )
}

export default Component
