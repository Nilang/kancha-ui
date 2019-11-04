import * as React from 'react'
import { TouchableHighlight, ViewStyle } from 'react-native'
import Container from '../Container/Container'

interface CardProps {
  onPress?: () => void
  shadow?: number
  br?: number
  testID?: string
}

const Card: React.FC<CardProps> = ({ children, onPress, shadow, br, testID }) => {
  const style: ViewStyle = {
    ...(shadow
      ? {
          elevation: shadow,
          shadowColor: '#000000',
          shadowOpacity: 0.2,
          shadowRadius: shadow * 5,
        }
      : {}),
  }
  return (
    <TouchableHighlight
      onPress={onPress}
      disabled={!onPress}
      testID={testID}
      underlayColor={'transparent'}
      style={style}
    >
      <Container shadow={shadow ? shadow : 0.1} padding={true} br={br ? br : 5} marginBottom={true}>
        {children}
      </Container>
    </TouchableHighlight>
  )
}

export default Card
