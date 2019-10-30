import * as React from 'react'
import { TouchableHighlight } from 'react-native'
import Container from '../Container/Container'

interface CardProps {
  onPress?: () => void
  shadow?: number
  br?: number
  testID?: string
}

const Card: React.FC<CardProps> = ({ children, onPress, shadow, br, testID }) => {
  return (
    <TouchableHighlight onPress={onPress} disabled={!onPress} testID={testID} underlayColor={'transparent'}>
      <Container shadow={shadow ? shadow : 0.1} padding={true} br={br ? br : 5} marginBottom={true}>
        {children}
      </Container>
    </TouchableHighlight>
  )
}

export default Card
