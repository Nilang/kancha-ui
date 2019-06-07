import * as React from 'react'
import { TouchableHighlight, Text } from 'react-native'

interface ButtonProps {
  onPress: () => void
}

const Button: React.FC<ButtonProps> = props => {
  return (
    <TouchableHighlight style={{ height: 50, backgroundColor: 'white' }} onPress={props.onPress}>
      <Text>{props.children}</Text>
    </TouchableHighlight>
  )
}

export default Button
