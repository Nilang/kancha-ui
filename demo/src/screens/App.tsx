import React, { Component } from 'react'
import { Text } from 'react-native'
import { Container, Button } from 'kancha'

interface Props {}
export default class App extends Component<Props> {
  state = {}

  updateState() {
    this.setState({
      fruit: true,
    })
  }

  render() {
    return (
      <Container flex={1} justifyContent={'center'}>
        <Text>Welcome to Kancha Sink!</Text>
        <Text>To get started, edit App.tsx</Text>
        <Button onPress={() => this.updateState()}>Hit me</Button>
      </Container>
    )
  }
}
