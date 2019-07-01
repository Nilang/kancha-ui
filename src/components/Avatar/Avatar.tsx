import * as React from 'react'
import { Image, ImageSourcePropType } from 'react-native'

import Text from '../Text/Text'
import Container from '../Container/Container'
import { withTheme } from '../../theming'

interface AvatarProps {
  /**
   * Title for avatar. Gets shortened to first 2 letters. eg.'Sa' Useful for usernames.
   */
  title?: string

  /**
   * Avatar size. default 32
   */
  size?: number

  /**
   * Rounded or squared.
   */
  type?: 'square' | 'rounded'

  /**
   * Standard image source type prop
   */
  source?: ImageSourcePropType

  /**
   * Provide custom background color. Only visible in text avatars
   */
  backgroundColor?: string

  /**
   * Theme properties passed in by HOC. Can ignore.
   */
  theme: any
}

const Avatar: React.FC<AvatarProps> = props => {
  const generateTitle = (str: string) => {
    return str.charAt(0).toUpperCase() + str.charAt(1).toLowerCase()
  }

  const size = props.size ? props.size : 32
  const type = props.type ? props.type : 'rounded'
  const title = props.title ? generateTitle(props.title) : '?'

  const avatarTypeStyle = {
    height: size,
    width: size,
    backgroundColor: props.backgroundColor ? props.backgroundColor : props.theme.colors.primary.brand,
    ...(type === 'square' ? { borderRadius: 5 } : { borderRadius: size / 2 }),
  }

  const imageAvatar = props.source ? <Image source={props.source} style={avatarTypeStyle} /> : null
  const textAvatar = (
    <Container viewStyle={avatarTypeStyle} alignItems={'center'} justifyContent={'center'}>
      <Text bold={true} textColor={'#ffffff'} textStyle={{ fontSize: size * 0.5 }}>
        {title}
      </Text>
    </Container>
  )

  return props.source ? imageAvatar : textAvatar
}

export default withTheme(Avatar)
