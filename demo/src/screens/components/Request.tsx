import * as React from 'react'
import { Container, Screen, Button, Constants, Banner } from '@kancha/kancha-ui'
import { NavigationScreen } from '../../navigators'
import { Colors } from '../../theme'

// tslint:disable-next-line:no-var-requires
const avatar1 = require('../../assets/images/kitten-avatar.jpg')

// tslint:disable-next-line:no-var-requires
const bannerImage = require('../../assets/images/abstract-blurred-gradient.jpg')

import TEST_ID from '../../../../e2e/testIDs'

const Component: React.FC<NavigationScreen> = () => {
  return (
    <Screen
      statusBarHidden={true}
      safeAreaBottom={true}
      safeAreaBottomBackground={Colors.WHITE}
      scrollEnabled={true}
      footerDivider={true}
      footerComponent={
        <Container paddingHorizontal={true} paddingBottom={true} backgroundColor={Colors.WHITE}>
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
                buttonText={'Accept'}
                onPress={() => ''}
                shadowOpacity={0.2}
              />
            </Container>
          </Container>
        </Container>
      }
    >
      <Container testID={TEST_ID.WELCOME}>
        <Banner
          title={'Onfido ID'}
          subTitle={'Hello subtitle'}
          avatar={avatar1}
          backgroundImage={bannerImage}
        />
      </Container>
    </Screen>
  )
}

export default Component
