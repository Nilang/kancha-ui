import * as React from 'react'
import { Container, Screen, Section, ListItem, Text, Constants } from '@kancha/kancha-ui'
import { NavigationScreen, Screens } from '../navigators'
import TEST_ID from '../../../e2e/testIDs'

const Components: React.FC<NavigationScreen> = props => {
  return (
    <Screen safeArea={true} scrollEnabled={true}>
      <Container paddingTop={50} testID={TEST_ID.WELCOME}>
        <Text bold={true} textAlign={'center'} type={Constants.TextTypes.H3}>
          🚀Welcome to Kancha Demo! 🎉
        </Text>
      </Container>
      <Section title={'Components'}>
        <ListItem onPress={() => props.navigation.push(Screens.Dummy)}>Screen</ListItem>
        <ListItem>Container</ListItem>
        <ListItem>List Item</ListItem>
        <ListItem>Log Item</ListItem>
        <ListItem>Button</ListItem>
        <ListItem>Icon</ListItem>
        <ListItem>Text</ListItem>
        <ListItem last={true}>Buttons</ListItem>
      </Section>
    </Screen>
  )
}

export default Components
