import React from 'react'
import { Container, Screen, Button, BottomSnap, Constants } from '@kancha/kancha-ui'
import { NavigationScreen } from '../../navigators'
import TEST_ID from '../../../../e2e/testIDs'

const Component: React.FC<NavigationScreen> = () => {
  return (
    <Screen scrollEnabled={true}>
      <Container testID={TEST_ID.VISIBLE_TEXT} padding margin>
        <Button
          type={Constants.BrandOptions.Primary}
          block={Constants.ButtonBlocks.Filled}
          onPress={() => BottomSnap.open('SHEET_1')}
          buttonText={'Open Sheet 1'}
        />
        <Container h={30}></Container>
        <Button
          type={Constants.BrandOptions.Primary}
          block={Constants.ButtonBlocks.Filled}
          onPress={() => BottomSnap.open('SHEET_2')}
          buttonText={'Open Sheet 2'}
        />
      </Container>
    </Screen>
  )
}

export default Component
