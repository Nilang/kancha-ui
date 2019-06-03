import * as React from 'react'
import { View, Text } from 'react-native'

interface ContainerProps {
  param: string
}

const Container: React.FC<ContainerProps> = props => {
  return (
    <View>
      <Text>It's Alive</Text>
    </View>
  )
}

export default Container
