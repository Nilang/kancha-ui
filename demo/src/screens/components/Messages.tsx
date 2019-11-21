import * as React from 'react'
import { Container, Screen, MessageItem, DAFMessage } from '@kancha/kancha-ui'
import { NavigationScreen } from '../../navigators'

const { data } = require('../../data/messages.json')

const Component: React.FC<NavigationScreen> = () => {
  const viewProfile = (did: string) => {
    console.log(did)
  }

  const viewMessage = (msg: DAFMessage) => {
    console.log(msg)
  }

  return (
    <Screen safeArea={true} scrollEnabled={true}>
      <Container>
        {data.messages.map((msg: DAFMessage, index: number) => {
          return (
            <MessageItem
              viewProfile={viewProfile}
              viewMessage={viewMessage}
              message={msg}
              key={msg.hash + index}
            />
          )
        })}
      </Container>
    </Screen>
  )
}

export default Component
