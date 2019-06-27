import React from 'react'
import { RNCamera } from 'react-native-camera'

import { Screen, Container } from '@kancha/kancha-ui'
import { Colors } from '../../theme'

const Scanner = () => {
  return (
    <Screen>
      <Container flex={1} backgroundColor={Colors.BLACK}>
        <RNCamera captureAudio={false} />
      </Container>
    </Screen>
  )
}

Scanner.navigationOptions = {
  header: null,
}

export default Scanner
