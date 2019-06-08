import React, { Component } from 'react'
import { Container, Text } from 'kancha'

interface Props {}
export default class App extends Component<Props> {
  render() {
    return (
      <Container flex={1} justifyContent={'center'} backgroundColor={'blue'}>
        <Text bold={true} textAlign={'center'}>
          🚀
        </Text>
        {/* <Text textAlign={'center'}>To get started, edit App.tsx</Text> */}
      </Container>
    )
  }
}
