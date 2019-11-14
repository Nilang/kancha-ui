import React from 'react'
import { BottomSheet, ListItem, Avatar, Text, Container } from '@kancha/kancha-ui'
import { ScrollView } from 'react-native'

interface Props {
  id: string
}

const BottomSheetImp: React.FC<Props> = ({ id }) => {
  return (
    <BottomSheet snapPoints={[-10, 400, 200, 600]} initialSnap={0} id={id}>
      {id => (
        <ScrollView style={{ backgroundColor: 'white', height: 600 }}>
          <Container padding>
            <Text>This is sheet ID => {id}</Text>
          </Container>
          <ListItem iconLeft={<Avatar address={'0x1234'} />}>Options</ListItem>
          <ListItem selected iconLeft={<Avatar address={'0x1234'} />}>
            Option
          </ListItem>
          <ListItem iconLeft={<Avatar address={'0x1234'} />}>Last Option</ListItem>
        </ScrollView>
      )}
    </BottomSheet>
  )
}

export default BottomSheetImp
