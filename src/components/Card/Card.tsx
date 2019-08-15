import * as React from 'react'
import { TouchableOpacity } from 'react-native'
import Container from '../Container/Container'

interface CardProps {
  onPress?: () => void
  shadow?: number
  br?: number
  testID?: string
}

const Card: React.FC<CardProps> = ({ children, onPress, shadow, br, testID }) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={!onPress} testID={testID}>
      <Container shadow={shadow ? shadow : 0.1} padding={true} br={br ? br : 5} marginBottom={true}>
        {children}
      </Container>
    </TouchableOpacity>
  )
}

export default Card
