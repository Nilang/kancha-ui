import React from 'react'
import { BottomSheet, ListItem, Avatar, Text, Container } from '@kancha/kancha-ui'
import { ScrollView } from 'react-native'

interface Props {
  id: string
}

const BottomSheetImp: React.FC<Props> = ({ id }) => {
  return (
    <BottomSheet id={id} topRatio={2}>
      {id => (
        <Container background={'primary'}>
          <Container padding>
            <Text>This is sheet ID = {id}</Text>
          </Container>
          <ListItem iconLeft={<Avatar address={'0x1234'} />}>Options</ListItem>
          <ListItem selected iconLeft={<Avatar address={'0x1234'} />}>
            Option
          </ListItem>
          <ListItem selected iconLeft={<Avatar address={'0x1234'} />}>
            Option
          </ListItem>
          <ListItem selected iconLeft={<Avatar address={'0x1234'} />}>
            Option
          </ListItem>
          <ListItem iconLeft={<Avatar address={'0x1234'} />}>Last Option</ListItem>
          <ListItem iconLeft={<Avatar address={'0x1234'} />}>Last Option</ListItem>
          <ListItem iconLeft={<Avatar address={'0x1234'} />}>Last Option</ListItem>
          <ListItem iconLeft={<Avatar address={'0x1234'} />}>Last Option</ListItem>
          <ListItem iconLeft={<Avatar address={'0x1234'} />}>Last Option</ListItem>
          <ListItem iconLeft={<Avatar address={'0x1234'} />}>Last Option</ListItem>
          <ListItem iconLeft={<Avatar address={'0x1234'} />}>Last Option</ListItem>
          <ListItem iconLeft={<Avatar address={'0x1234'} />}>Last Option</ListItem>
          <ListItem iconLeft={<Avatar address={'0x1234'} />}>Last Option</ListItem>
          <ListItem iconLeft={<Avatar address={'0x1234'} />}>Last Option</ListItem>
          <ListItem iconLeft={<Avatar address={'0x1234'} />}>Last Option</ListItem>
          <ListItem iconLeft={<Avatar address={'0x1234'} />}>Last Option</ListItem>
        </Container>
      )}
    </BottomSheet>
  )
}

export default BottomSheetImp
