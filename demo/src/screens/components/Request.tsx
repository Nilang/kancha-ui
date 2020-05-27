import * as React from 'react'
import { Container, Screen, Button, Constants, Banner, RequestItem, Indicator } from '@kancha/kancha-ui'
import { NavigationScreen } from '../../navigators'
import { Colors } from '../../theme'
import TEST_ID from '../../../../e2e/testIDs'

const { data } = require('../../data/messages.json')
// tslint:disable-next-line:no-var-requires
const bannerImage = require('../../assets/images/abstract-blurred-gradient.jpg')

const Component: React.FC<NavigationScreen> = ({ navigation }) => {
  const onSelectItem = (id: string | null, jwt: string | null, claimType: string) => {
    console.log(id, jwt, claimType)
  }

  const selfSign = (claimType: string, value: string) => {
    console.log(claimType, value)
  }
  const requestMessage = data.messages[1]
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
                buttonText={'Later'}
                onPress={() => navigation.goBack()}
              />
            </Container>
            <Container flex={1}>
              <Button
                block={Constants.ButtonBlocks.Filled}
                type={Constants.BrandOptions.Primary}
                buttonText={'Share'}
                onPress={() => navigation.goBack()}
                shadowOpacity={0.2}
              />
            </Container>
          </Container>
        </Container>
      }
    >
      <Container testID={TEST_ID.WELCOME}>
        <Banner
          issuer={requestMessage.iss}
          title={'Data Requestor'}
          subTitle={'Subtitle'}
          backgroundImage={bannerImage}
        />
        <Indicator text={'Share your data with ethr:did:0f1xe34...j9h Inc.'} />
        <Container>
          {requestMessage.sdr.map((sdr: any, index: number) => {
            return (
              <RequestItem
                selfSign={selfSign}
                closeAfterSelect={false}
                key={sdr.claimType + index}
                claimType={sdr.claimType}
                reason={sdr.reason}
                issuers={sdr.iss}
                credentials={sdr.vc}
                required={sdr.essential}
                onSelectItem={onSelectItem}
              />
            )
          })}
        </Container>
      </Container>
    </Screen>
  )
}

export default Component
