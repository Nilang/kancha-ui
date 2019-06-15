import React, { useState } from 'react'
import { Container, Text, Constants, Button } from '@kancha/kancha-ui'

import TEST_ID from '../../../e2e/testIDs'

interface Props {}

const App: React.FC<Props> = () => {
  const [isVisible, toggleVisible] = useState(false)

  return (
    <Container
      flex={1}
      justifyContent={'center'}
      background={Constants.BrandOptions.Primary}
      testID={TEST_ID.WELCOME}
    >
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
  )
}

export default App
