import * as React from 'react'
import { TouchableHighlight, ViewStyle } from 'react-native'
import Container from '../Container/Container'
import * as Kancha from '../../types'
import { withTheme } from '../../theming'

interface CardProps {
  onPress?: () => void
  shadow?: number
  br?: number
  testID?: string
  background?: Kancha.BrandPropOptions
  theme: any
}

const Card: React.FC<CardProps> = ({ children, onPress, shadow, br, background, testID }) => {
  const style: ViewStyle = {
    ...(shadow
      ? {
          elevation: shadow,
          shadowColor: '#000000',
          shadowOpacity: shadow / 15,
          shadowRadius: shadow * 4,
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
      <Container padding={true} br={br ? br : 5} marginBottom={true} background={background}>
        {children}
      </Container>
    </TouchableHighlight>
  )
}

export default withTheme(Card)
