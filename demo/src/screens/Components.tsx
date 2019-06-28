import * as React from 'react'
import { Container, Screen, Section, ListItem, Text, Constants, FabButton } from '@kancha/kancha-ui'
import { NavigationScreen, Screens } from '../navigators'
import TEST_ID from '../../../e2e/testIDs'

const Components: React.FC<NavigationScreen> = props => {
  return (
    <Screen
      scrollEnabled={true}
      fabButton={
        <Container alignItems={'center'} justifyContent={'flex-end'} flex={1}>
          <FabButton
            onPress={() => props.navigation.push(Screens.Scanner)}
            icon={{ name: 'ios-qr-scanner', iconFamily: 'Ionicons' }}
            size={80}
          />
        </Container>
      }
    >
      <Container paddingTop={50} testID={TEST_ID.WELCOME}>
        <Text bold={true} textAlign={'center'} type={Constants.TextTypes.H3}>
          🚀Welcome to Kancha Demo! 🎉
        </Text>
      </Container>
      <Section title={'Components'}>
        <ListItem onPress={() => props.navigation.push(Screens.Screen)}>Screen</ListItem>
        <ListItem onPress={() => props.navigation.push(Screens.Container)}>Container</ListItem>
        <ListItem onPress={() => props.navigation.push(Screens.Text)}>Text</ListItem>
        <ListItem onPress={() => props.navigation.push(Screens.Dummy)}>Button</ListItem>
        <ListItem onPress={() => props.navigation.push(Screens.Dummy)}>Icon</ListItem>
        <ListItem onPress={() => props.navigation.push(Screens.ListItem)}>List Item</ListItem>
        <ListItem onPress={() => props.navigation.push(Screens.Dummy)} last={true}>
          Log Item
        </ListItem>
      </Section>
    </Screen>
  )
}

export default Components
