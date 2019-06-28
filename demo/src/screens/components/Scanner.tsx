import React from 'react'
import { RNCamera } from 'react-native-camera'
import { Screen, Container, FabButton } from '@kancha/kancha-ui'
import { Colors } from '../../theme'
import { NavigationScreen } from '../../navigators'

// interface ScannerProps extends NavigationScreen {}

const Scanner = ({ navigation }: NavigationScreen) => {
  return (
    <Screen
      statusBarHidden={true}
      fabButton={
        <Container alignItems={'center'} justifyContent={'flex-end'}>
          <FabButton
            color={Colors.CHARCOAL}
            onPress={() => navigation.goBack()}
            icon={{ name: 'ios-close', iconFamily: 'Ionicons' }}
          />
        </Container>
      }
    >
      <Container flex={1} backgroundColor={Colors.BLACK}>
        <RNCamera captureAudio={false} style={{ flex: 1 }} />
      </Container>
    </Screen>
  )
}

Scanner.navigationOptions = {
  header: null,
}

export default Scanner
