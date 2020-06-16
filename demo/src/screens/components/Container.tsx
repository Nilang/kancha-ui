import React from 'react'
import { Container, Screen, Button, BottomSnap } from '@kancha/kancha-ui'
import { NavigationScreen } from '../../navigators'
import TEST_ID from '../../../../e2e/testIDs'

const Component: React.FC<NavigationScreen> = () => {
  return (
    <Screen scrollEnabled={true}>
      <Container testID={TEST_ID.VISIBLE_TEXT} padding margin>
        <Button onPress={() => BottomSnap.open('SHEET_1')} buttonText={'Open Sheet 1'} />
        <Button onPress={() => BottomSnap.open('SHEET_2')} buttonText={'Open Sheet 2'} />
        <Button onPress={() => BottomSnap.open('SHEET_3')} buttonText={'Open Sheet 3'} />
      </Container>
    </Screen>
  )
}

export default Component
