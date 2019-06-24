import * as React from 'react'
import { Container, Screen } from '@kancha/kancha-ui'
import { NavigationScreen } from '../../navigators'
import TEST_ID from '../../../../e2e/testIDs'

const Component: React.FC<NavigationScreen> = () => {
  return (
    <Screen safeArea={true} scrollEnabled={true}>
      <Container testID={TEST_ID.VISIBLE_TEXT} />
    </Screen>
  )
}

export default Component
