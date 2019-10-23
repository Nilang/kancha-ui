import React, { createRef } from 'react'
import { Container, Screen, Text, ListItem, BottomSheet } from '@kancha/kancha-ui'
import { NavigationScreen } from '../../navigators'
import TEST_ID from '../../../../e2e/testIDs'

const Component: React.FC<NavigationScreen> = () => {
  const bottomDrawerRef = createRef<any>()

  return (
    <Screen
      safeArea={true}
      scrollEnabled={true}
      bottomSheet={
        <BottomSheet ref={bottomDrawerRef} snapPoints={[500, 300, 0]} initialSnap={2}>
          <ListItem>Testing</ListItem>
          <ListItem>Testing</ListItem>
          <ListItem>Testing</ListItem>
          <ListItem>Testing</ListItem>
          <ListItem>Testing</ListItem>
          <ListItem>Testing</ListItem>
          <ListItem>Testing</ListItem>
          <ListItem>Testing</ListItem>
          <ListItem>Testing</ListItem>
          <ListItem>Testing</ListItem>
          <ListItem>Testing</ListItem>
          <ListItem>Testing</ListItem>
          <ListItem>Testing</ListItem>
          <ListItem>Testing</ListItem>
          <ListItem>Testing</ListItem>
          <ListItem>Testing</ListItem>
          <ListItem>Testing</ListItem>
          <ListItem>Testing</ListItem>
          <ListItem>Testing</ListItem>
          <ListItem>Testing</ListItem>
          <ListItem>Testing</ListItem>
          <ListItem>Testing</ListItem>
          <ListItem>Testing</ListItem>
          <ListItem>Testing</ListItem>
          <ListItem>Testing</ListItem>
          <ListItem>Testing</ListItem>
          <ListItem>Testing</ListItem>
          <ListItem>Testing</ListItem>
          <ListItem>Testing</ListItem>
          <ListItem>Testing</ListItem>
          <ListItem>Testing</ListItem>
          <ListItem>Testing</ListItem>
          <ListItem>Testing</ListItem>
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
