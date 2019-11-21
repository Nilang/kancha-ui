import * as React from 'react'
import { TouchableHighlight, TouchableOpacity } from 'react-native'
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

const MessageItem: React.FC<MessageItemProps> = ({ message, viewProfile, viewMessage, theme }) => {
  return (
    <TouchableHighlight
      style={{ marginBottom: 5, backgroundColor: theme.colors.primary.background }}
      onPress={() => viewMessage(message)}
      underlayColor={'#FAFAFA'}
    >
      <Container flexDirection={'row'} alignItems={'flex-end'} marginBottom={1}>
        {/* <Container w={2} /> */}
        <Container flex={1} padding={10}>
          <Container
            flexDirection={'row'}
            justifyContent={'space-between'}
            alignItems={'flex-start'}
            paddingRight
            paddingLeft
            paddingBottom
          >
            <Container>
              <Container paddingBottom={3}>
                <Text type={TextTypes.ActivityTitle} bold>
                  Message
                </Text>
              </Container>
              <Container paddingBottom={3} flexDirection={'row'}>
                <Text type={TextTypes.SubTitle}>id: {message.hash.slice(0, 20) + `...`}</Text>
              </Container>
            </Container>
            <Container flexDirection={'row'}>
              {message.vc && <Icon icon={{ name: 'ios-attach', iconFamily: 'Ionicons' }} size={18} />}
              <Container paddingLeft={5}>
                <Text type={TextTypes.ActivitySubTitle}>
                  {(message.nbf && formatDistanceToNow(message.nbf * 1000)) + ' ago' || 'Some time ago'}
                </Text>
              </Container>
            </Container>
          </Container>
          <Container
            flexDirection={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            paddingBottom={5}
            paddingLeft={true}
            paddingRight={true}
          >
            <TouchableOpacity onPress={() => viewProfile(message.iss.did)}>
              <Container alignItems={'center'}>
                <Avatar type={'circle'} gravatarType={'retro'} address={message.iss.did} size={40} />
                <Container paddingTop={8}>
                  <Text type={TextTypes.ActivitySubTitle}>{message.iss.did.slice(9, 20) + `...`}</Text>
                </Container>
              </Container>
            </TouchableOpacity>
            <Container flexDirection={'row'}>
              <Icon icon={{ name: 'ios-arrow-forward', iconFamily: 'Ionicons' }} size={30} />
            </Container>
            <TouchableOpacity onPress={() => viewProfile(message.sub.did)}>
              <Container alignItems={'center'}>
                <Avatar type={'circle'} gravatarType={'retro'} address={message.sub.did} size={40} />
                <Container paddingTop={8}>
                  <Text type={TextTypes.ActivitySubTitle}>{message.sub.did.slice(9, 20) + `...`}</Text>
                </Container>
              </Container>
            </TouchableOpacity>
          </Container>
        </Container>
      </Container>
    </TouchableHighlight>
  )
}

export default withTheme(MessageItem)
