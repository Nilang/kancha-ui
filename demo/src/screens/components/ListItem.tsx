import * as React from 'react'
import { Container, Screen, Section, ListItem } from '@kancha/kancha-ui'
import { NavigationScreen } from '../../navigators'
// import TEST_ID from '../../../../e2e/testIDs'

const Component: React.FC<NavigationScreen> = () => {
  return (
    <Screen safeArea={true} scrollEnabled={true}>
      <Container>
        <Section>
          <ListItem>Standard List Item</ListItem>
          <ListItem>Standard List Item</ListItem>
          <ListItem>Standard List Item</ListItem>
          <ListItem>Standard List Item</ListItem>
          <ListItem last={true}>Standard List Item</ListItem>
        </Section>
        <Section>
          <ListItem accessoryRight={'Some note'}>Standard List Item</ListItem>
          <ListItem accessoryRight={'Some note'} selected={true}>
            Selected
          </ListItem>
          <ListItem accessoryRight={'Some note'} last={true}>
            Standard List Item
          </ListItem>
        </Section>
        <Section>
          <ListItem warn={true} accessoryRight={'-21%'}>
            Warning text
          </ListItem>
          <ListItem last={true} editMode={true}>
            Editable text
          </ListItem>
        </Section>
      </Container>
    </Screen>
  )
}

export default Component
