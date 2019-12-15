import React from 'react'
import { Container, Screen, ActivityItem, Constants, Text, Credential, Device } from '@kancha/kancha-ui'
import { NavigationScreen, Screens } from '../../navigators'

// const activityFeed = require('../../data/activity_feed.json')
const { data } = require('../../data/messages.json')

console.log(data)

const Component: React.FC<NavigationScreen> = props => {
  const displayProfile = (id: any) => {
    props.navigation.navigate(Screens.Profile, { id })
    console.log(id)
  }
  const confirmRequest = (id: any) => {
    props.navigation.navigate(Screens.Request)
    console.log(id)
  }
  const rejectRequest = (id: any) => {
    props.navigation.navigate(Screens.Request)
    console.log(id)
  }

  return (
    <Screen safeAreaTop={true} safeAreaBottom={false} scrollEnabled={true}>
      <Container>
        <Container padding>
          <Text type={Constants.TextTypes.H5} bold>
            Today
          </Text>
        </Container>
        <Container flex={1}>
          {data.messages.map((message: any, i: number) => {
            return (
              <ActivityItem
                id={message.hash}
                key={message.hash + i}
                type={message.type}
                message={message}
                receiver={message.sub}
                sender={message.iss}
                viewer={{
                  did: 'did:ethr:0x0365d19cec991d8e2c3d3c910b2cbcdf3369b3fc',
                  shortId: 'did:ethr:0x0365...b3fc',
                  profileImage:
                    'https://www.catster.com/wp-content/uploads/2015/06/google-cat-search-2014-06.jpg',
                }}
                date={1571329073000}
                confirm={confirmRequest}
                actions={['Share']}
                reject={rejectRequest}
                attachments={message.vc}
                renderAttachment={(credential: any, credentialIndex: number) => {
                  console.log(credential)
                  return (
                    <Container w={Device.width - 40} padding paddingRight={0} key={credentialIndex}>
                      <Credential
                        background={'primary'}
                        shadow={1.5}
                        issuer={credential.iss}
                        subject={credential.sub}
                        exp={credential.exp}
                        fields={credential.fields}
                      />
                    </Container>
                  )
                }}
                profileAction={(id: any) => displayProfile(id)}
              />
            )
          })}
        </Container>
      </Container>
    </Screen>
  )
}

export default Component
