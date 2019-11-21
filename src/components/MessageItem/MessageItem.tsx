import * as React from 'react'
import { TouchableHighlight } from 'react-native'
// import { withTheme } from '../../theming'

import Container from '../Container/Container'
import * as Kancha from '../../types'
import Text, { TextTypes } from '../Text/Text'
import Avatar from '../Avatar/Avatar'
import Icon from '../Icon/Icon'
import { withTheme } from '../../theming'
import { formatDistanceToNow } from 'date-fns'

/**
 * Types will be moved and consolidated with existing types in ./types
 */

interface VCFields {
  type: string
  value: string | object
  isObj: boolean
}

interface VC {
  hash: string
  iss: Kancha.Identity
  sub: Kancha.Identity
  nbf?: number
  iat?: number
  exp?: number
  fields: VCFields[]
}

export interface DAFMessage {
  hash: string
  iat?: number
  nbf?: number
  jwt: string
  vis: string
  iss: Kancha.Identity
  sub: Kancha.Identity
  aud?: Kancha.Identity
  vc?: VC[]
}

interface MessageItemProps {
  message: DAFMessage
  theme: any
  viewMessage: (message: DAFMessage) => void
  viewProfile: (did: string) => void
}

const MessageItem: React.FC<MessageItemProps> = ({ message, viewMessage, viewProfile, theme }) => {
  return (
    <TouchableHighlight
      style={{ marginBottom: 5, backgroundColor: theme.colors.primary.background }}
      onPress={() => viewMessage(message)}
      underlayColor={'#FAFAFA'}
    >
      <Container flexDirection={'row'}>
        <Container padding>
          <Container>
            <Avatar type={'circle'} gravatarType={'retro'} address={message.iss.did} size={38} />
            <Container viewStyle={{ position: 'absolute', left: 20, top: 0 }}>
              <Avatar border type={'circle'} gravatarType={'retro'} address={message.sub.did} size={40} />
            </Container>
          </Container>
        </Container>
        <Container paddingTop marginLeft={20} flex={1}>
          <Text type={TextTypes.ActivityTitle}>
            <Text onPress={() => viewProfile(message.iss.did)} bold>
              {message.iss.did.slice(9, 18)}
            </Text>
            sent a message to
            <Text onPress={() => viewProfile(message.sub.did)} bold>
              {message.sub.did.slice(9, 18)}
            </Text>
          </Text>
          <Container marginTop={5}>
            <Text type={TextTypes.ActivitySubTitle}>
              {(message.nbf && formatDistanceToNow(message.nbf * 1000)) + ' ago' || 'Some time ago'}
            </Text>
          </Container>
          <Container paddingTop paddingBottom flexDirection={'row'} alignItems={'center'}>
            <Icon icon={{ name: 'ios-attach', iconFamily: 'Ionicons' }} size={18} />
            <Container paddingLeft={5}>
              <Text>This raw message has {message.vc && message.vc.length} attachment(s)</Text>
            </Container>
          </Container>
        </Container>
      </Container>
    </TouchableHighlight>
  )
}

export default withTheme(MessageItem)
