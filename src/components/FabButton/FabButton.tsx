import * as React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon, { IconConfig } from '../Icon/Icon'
import { withTheme } from '../../theming'

interface FabButtonProps {
  color?: string
  icon?: IconConfig
  iconColor?: string
  onPress: () => void
  size?: number
  theme: any
}

const FabButton: React.FC<FabButtonProps> = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        height: props.size || 70,
        width: props.size || 70,
        backgroundColor: props.color || props.theme.colors.primary.brand,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {props.icon && (
        <Icon icon={props.icon} size={35} color={props.iconColor || props.theme.colors.primary.background} />
      )}
    </TouchableOpacity>
  )
}

export default withTheme(FabButton)
