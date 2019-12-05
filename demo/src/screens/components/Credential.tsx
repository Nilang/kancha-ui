import * as React from 'react'
import { Container, Screen, Credential } from '@kancha/kancha-ui'
import { NavigationScreen } from '../../navigators'
import TEST_ID from '../../../../e2e/testIDs'

const Component: React.FC<NavigationScreen> = () => {
  return (
    <Screen safeArea={true} scrollEnabled={true} background={'primary'}>
      <Container testID={TEST_ID.WELCOME} padding={true}>
        {[0, 2, 3].map((credential, index) => {
          return (
            <Credential
              exp={1324235245}
              key={index + credential}
              issuer={{
                did: 'did:ethr:0x589c84de5cf1ccc1d7b3410d9ecd0936c991a2f0',
                shortId: 'Mozart',
                profileImage: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Beethoven_Riedel_1801.jpg',
              }}
              subject={{
                did: 'did:ethr:0x589c84de5cf1ccc1d7b3410d9ecd0936d91a2f0',
                shortId: 'Mozart',
                profileImage: '',
              }}
              fields={[]}
              shadow={0}
              background={'secondary'}
            />
          )
        })}
      </Container>
    </Screen>
  )
}

export default Component
