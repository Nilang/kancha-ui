import React, { Component } from 'react'
import { Container, Text } from '@kancha/kancha'

interface Props {}
export default class App extends Component<Props> {
  render() {
    return (
      <Container flex={1} justifyContent={'center'} backgroundColor={'blue'}>
        <Text bold={true} textAlign={'center'}>
          🚀Welcome to Kancha Demo!
        </Text>
      </Container>
    )
  }
}
