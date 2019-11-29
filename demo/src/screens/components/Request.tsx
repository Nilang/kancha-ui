import * as React from 'react'
import {
  Container,
  Screen,
  Button,
  Constants,
  Banner,
  RequestItem,
  Typings,
  Indicator,
} from '@kancha/kancha-ui'
import { NavigationScreen } from '../../navigators'
import { Colors } from '../../theme'

// tslint:disable-next-line:no-var-requires
const avatar1 = require('../../assets/images/kitten-avatar.jpg')

// tslint:disable-next-line:no-var-requires
const bannerImage = require('../../assets/images/abstract-blurred-gradient.jpg')

import TEST_ID from '../../../../e2e/testIDs'

const nameOptions: Typings.RequestItemSelectable[] = [
  {
    id: '0001',
    iss: { shortId: 'Deutsche Bank', did: '0xfksksdk' },
    type: 'name',
    value: 'Jack',
    selected: true,
  },
  {
    id: '0002',
    iss: { shortId: 'Onfido', did: '0xfksksdk' },
    type: 'name',
    value: 'Jacky',
    selected: false,
  },
  {
    id: '0003',
    iss: { shortId: 'Onfido', did: '0xfksksdk' },
    type: 'name',
    value: 'Jacko',
    selected: false,
  },
]

const lastNameOptions: Typings.RequestItemSelectable[] = [
  {
    id: '0001',
    iss: { shortId: 'Deutsche Bank', did: '0xfksksdk' },
    type: 'lastName',
    value: 'Morrison',
    selected: true,
  },
  {
    id: '0002',
    iss: { shortId: 'Onfido', did: '0xfksksdk' },
    type: 'lastName',
    value: 'Kennedy',
    selected: false,
  },
  {
    id: '0003',
    iss: { shortId: 'Onfido', did: '0xfksksdk' },
    type: 'lastName',
    value: 'Morrison',
    selected: false,
  },
]

const locationOptions: Typings.RequestItemSelectable[] = [
  {
    id: '0001',
    iss: { shortId: 'Deutsche Bank', did: '0xfksksdk' },
    type: 'location',
    value: 'Ireland',
    selected: true,
  },
  {
    id: '0002',
    iss: { shortId: 'Onfido', did: '0xfksksdk' },
    type: 'location',
    value: 'Dublin, Ireland',
    selected: false,
  },
  {
    id: '0003',
    iss: { shortId: 'Onfido', did: '0xfksksdk' },
    type: 'location',
    value: 'Dublin',
    selected: false,
  },
]

const emailOptions: Typings.RequestItemSelectable[] = [
  {
    id: '0001',
    iss: { shortId: 'Deutsche Bank', did: '0xfksksdk' },
    type: 'location',
    value: 'jack@mymail.com',
    selected: true,
  },
  {
    id: '0002',
    iss: { shortId: 'Onfido', did: '0xfksksdk' },
    type: 'name',
    value: 'jacky@mymail.com',
    selected: false,
  },
  {
    id: '0003',
    iss: { shortId: 'Deutsche Bank', did: '0xfksksdk' },
    type: 'name',
    value: 'jackie_1234@mymail.com',
    selected: false,
  },
]

const phoneOptions: Typings.RequestItemSelectable[] = [
  {
    id: '0001',
    iss: { shortId: 'Serto', did: '0xfksksdk' },
    type: 'phone',
    value: '+555-321-8763',
    selected: true,
  },
]

const Component: React.FC<NavigationScreen> = ({ navigation }) => {
  const onSelectItem = (id: string, claimType: string) => {
    console.log(id, claimType)
  }

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
          title={'Crypto World Conf'}
          subTitle={'HODL Inc'}
          avatar={avatar1}
          backgroundImage={bannerImage}
        />
        <Indicator text={'Share your data with HODL Inc.'} />
        <Container>
          <RequestItem
            claimType={'firstName'}
            options={nameOptions}
            required={true}
            onSelectItem={onSelectItem}
          />
          <RequestItem
            claimType={'lastName'}
            options={lastNameOptions}
            required={true}
            onSelectItem={onSelectItem}
          />
          <RequestItem
            claimType={'location'}
            options={locationOptions}
            required={true}
            onSelectItem={onSelectItem}
          />
          <RequestItem
            claimType={'email'}
            options={emailOptions}
            required={false}
            onSelectItem={onSelectItem}
          />
          <RequestItem
            claimType={'phone'}
            options={phoneOptions}
            required={false}
            onSelectItem={onSelectItem}
          />
        </Container>
      </Container>
    </Screen>
  )
}

export default Component
