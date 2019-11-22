import * as React from 'react'
import { Container, Screen, MessageItem, DAFMessage } from '@kancha/kancha-ui'
import { NavigationScreen } from '../../navigators'
import { useNavigation } from 'react-navigation-hooks'

const { data } = require('../../data/messages.json')

console.log(data)

const Component: React.FC<NavigationScreen> = () => {
  const navigation = useNavigation()

  const viewProfile = (did: string) => {
    console.log(did)
  }

  const viewMessage = (msg: DAFMessage) => {
    console.log(msg)
    navigation.navigate('MessageDetail', {
      message: msg,
    })
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
