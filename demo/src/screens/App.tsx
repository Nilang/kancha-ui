import React, { useState } from 'react'
import { Container, Text, Constants, Button, Screen } from '@kancha/kancha-ui'

import TEST_ID from '../../../e2e/testIDs'

interface Props {}

const App: React.FC<Props> = () => {
  const [isVisible, toggleVisible] = useState(false)

  return (
    <Screen
      scrollEnabled={true}
      footerDivider={true}
      safeArea={true}
      footerComponent={
        <Container paddingHorizontal={true}>
          <Container flexDirection={'row'}>
            <Container flex={1}>
              <Button
                block={Constants.ButtonBlocks.Clear}
                type={Constants.BrandOptions.Warning}
                buttonText={'Decline'}
                onPress={() => ''}
              />
            </Container>
            <Container flex={1}>
              <Button
                block={Constants.ButtonBlocks.Filled}
                type={Constants.BrandOptions.Primary}
                buttonText={'Decline'}
                onPress={() => ''}
              />
            </Container>
          </Container>
        </Container>
      }
    >
      <Container testID={TEST_ID.WELCOME} paddingTop={100}>
        <Text bold={true} textAlign={'center'} type={Constants.TextTypes.H3}>
          🚀Hey, It's Kancha Demo! 🎉
        </Text>

        <Container paddingTop={50} paddingHorizontal={30}>
          <Button
            testID={TEST_ID.WELCOME_BUTTON}
            fullWidth={true}
            onPress={() => toggleVisible(!isVisible)}
            buttonText={'Tap me'}
            type={Constants.BrandOptions.Primary}
            block={Constants.ButtonBlocks.Filled}
          />
        </Container>

        {isVisible && (
          <Container paddingHorizontal={30}>
            <Text testID={TEST_ID.VISIBLE_TEXT}>Hello, I'm visible now!</Text>
          </Container>
        )}
      </Container>
    </Screen>
  )
}

export default App
