import * as React from 'react'
import { Container, Screen, Button, Constants } from '@kancha/kancha-ui'
import { NavigationScreen } from '../../navigators'

import TEST_ID from '../../../../e2e/testIDs'

const Component: React.FC<NavigationScreen> = () => {
  return (
    <Screen
      safeArea={true}
      scrollEnabled={true}
      footerDivider={true}
      footerComponent={
        <Container paddingHorizontal={true} paddingBottom={true}>
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
      <Container testID={TEST_ID.VISIBLE_TEXT}>
        <Container h={150} background={Constants.BrandOptions.Primary} marginBottom={true} />
        <Container h={150} background={Constants.BrandOptions.Primary} marginBottom={true} />
        <Container h={150} background={Constants.BrandOptions.Primary} marginBottom={true} />
        <Container h={150} background={Constants.BrandOptions.Primary} marginBottom={true} />
        <Container h={150} background={Constants.BrandOptions.Primary} marginBottom={true} />
      </Container>
    </Screen>
  )
}

export default Component
