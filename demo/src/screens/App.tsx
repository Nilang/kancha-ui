import React, { Component } from 'react'
import { Container, Text } from '@kancha/kancha-ui'

interface Props {}
export default class App extends Component<Props> {
  render() {
    return (
      <Container flex={1} justifyContent={'center'} background={'secondary'} testID="WELCOME_TESTID">
        <Text bold={true} textAlign={'center'} type={'h3'}>
          🚀Hey, It's Kancha Demo! 🎉
        </Text>
      </Container>
    )
  }
}
