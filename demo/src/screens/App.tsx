import React, { Component } from 'react'
import { Container, Text, Constants, Button } from '@kancha/kancha-ui'

interface Props {}
export default class App extends Component<Props> {
  render() {
    return (
      <Container
        flex={1}
        justifyContent={'center'}
        background={Constants.BrandOptions.Primary}
        testID="WELCOME_TESTID"
      >
        <Text bold={true} textAlign={'center'} type={Constants.TextTypes.H3}>
          🚀Hey, It's Kancha Demo! 🎉
        </Text>

        <Container paddingTop={50} paddingHorizontal={30}>
          <Button
            fullWidth={true}
            onPress={() => ''}
            buttonText={'Tap me'}
            type={Constants.BrandOptions.Primary}
            block={Constants.ButtonBlocks.Filled}
          />
        </Container>
      </Container>
    )
  }
}
