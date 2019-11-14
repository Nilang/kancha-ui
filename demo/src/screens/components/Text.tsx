import * as React from 'react'
import { Container, Screen, Text, Constants } from '@kancha/kancha-ui'
import { NavigationScreen } from '../../navigators'
import TEST_ID from '../../../../e2e/testIDs'

const Component: React.FC<NavigationScreen> = () => {
  return (
    <Screen safeArea={true} scrollEnabled={true} background={'primary'}>
      <Container testID={TEST_ID.VISIBLE_TEXT} padding>
        <Container>
          <Text type={Constants.TextTypes.H1} bold>
            Bold H1
          </Text>
          <Text type={Constants.TextTypes.H2} bold>
            Bold H2
          </Text>
          <Text type={Constants.TextTypes.H3} bold>
            Bold H3
          </Text>
          <Text type={Constants.TextTypes.H4} bold>
            Bold H4
          </Text>
          <Text type={Constants.TextTypes.H5} bold>
            Bold H5
          </Text>
          <Text type={Constants.TextTypes.Body} bold>
            Bold Body
          </Text>
          <Text type={Constants.TextTypes.Body}>Body</Text>
          <Text type={Constants.TextTypes.ListItem}>List Item</Text>
          <Text type={Constants.TextTypes.ListItemNote}>Item Note</Text>
          <Text type={Constants.TextTypes.ListItemRight}>Item Right</Text>

          <Text type={Constants.TextTypes.SectionHeader}>Section Header</Text>
          <Text type={Constants.TextTypes.SubTitle}>Subtitle</Text>
          <Text type={Constants.TextTypes.Summary}>Summary</Text>
          <Text type={Constants.TextTypes.Body} warn>
            Body warning
          </Text>
        </Container>
      </Container>
    </Screen>
  )
}

export default Component
