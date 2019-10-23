import React, { createRef } from 'react'
import { Container, Screen, Text, BottomSheet, ListItem, Avatar } from '@kancha/kancha-ui'
import { ScrollView } from 'react-native'
import { NavigationScreen } from '../../navigators'
import TEST_ID from '../../../../e2e/testIDs'

const Component: React.FC<NavigationScreen> = () => {
  const bottomDrawerRef = createRef<any>()

  return (
    <Screen
      scrollEnabled={true}
      bottomSheet={
        <BottomSheet ref={bottomDrawerRef} snapPoints={[0, 200, 400]} initialSnap={0}>
          <ScrollView style={{ backgroundColor: 'white', height: 400 }}>
            <ListItem iconLeft={<Avatar address={'0x1234'} />}>Option</ListItem>
            <ListItem iconLeft={<Avatar address={'0x1234'} />}>Option</ListItem>
            <ListItem iconLeft={<Avatar address={'0x1234'} />}>Last Option</ListItem>
          </ScrollView>
        </BottomSheet>
      }
    >
      <Container testID={TEST_ID.VISIBLE_TEXT} padding margin>
        <Text onPress={() => bottomDrawerRef.current.snapTo(1)}>Show Bottom Sheet</Text>
      </Container>
    </Screen>
  )
}

export default Component
