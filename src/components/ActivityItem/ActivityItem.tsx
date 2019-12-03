import * as React from 'react'
import { TouchableOpacity } from 'react-native'
import Container from '../Container/Container'
import Button, { ButtonBlocks } from '../Button/Button'
import Avatar from '../Avatar/Avatar'
import Credential from '../../components/Credential/Credential'
import ActivityItemHeader from '../../components/ActivityItemHeader/ActivityItemHeader'
import * as Kancha from '../../types'
import { withTheme } from '../../theming'
import { BrandOptions } from '../../constants'

interface ActivityItemProps {
  /**
   * The unique id or message hash
   */
  id: string

  /**
   * The message type
   */
  type: 'w3c.vp' | 'w3c.vc' | 'sdr' | string
  /**
   * The full message payload (for passing back to event handlers)
   */
  message: any
  /**
   * The timestamp for when this message was recieved or sent
   */
  date: number

  /**
   * The issuer of this message item
   */
  issuer: Kancha.Identity

  /**
   * The activity that is takaing place
   */
  activity?: string

  /**
   * The subject
   */
  subject: Kancha.Identity

  /**
   * The viewer
   */
  viewer: Kancha.Identity

  /**
   * The reason for the message
   */
  reason?: string

  /**
   * Message attachments
   */
  attachments?: any[]

  /**
   * Message attachments
   */
  attachmentsAction?: (attachments: any) => void

  /**
   * Message actions
   */
  actions?: string[]

  /*
   * The confirm action
   */
  confirm?: (msg: any) => void

  /*
   * The reject action
   */
  reject?: (msg: any) => void

  /**
   * Profile actions like being able to navigate to a profile
   */
  profileAction: (id: string) => void

  /**
   * Credential style
   */
  credentialStyle?: any
  /**
   * Theme prop
   */
  theme: any
}

const ActivityItem: React.FC<ActivityItemProps> = ({
  message,
  type,
  activity,
  issuer,
  subject,
  viewer,
  reason,
  attachments,
  attachmentsAction,
  actions,
  profileAction,
  credentialStyle,
  date,
  confirm,
  reject,
  theme,
}) => {
  const issProfileSource = issuer.profileImage ? { source: { uri: issuer.profileImage } } : {}
  return (
    <Container flex={1} flexDirection={'row'} background={'primary'} padding marginBottom={10}>
      <Container alignItems={'center'}>
        <Container>
          <Avatar
            {...issProfileSource}
            type={'circle'}
            gravatarType={'retro'}
            address={issuer.did}
            size={38}
          />
        </Container>
      </Container>
      <Container marginLeft paddingRight flex={1}>
        <ActivityItemHeader
          viewer={viewer}
          issuer={issuer}
          subject={subject}
          profileAction={profileAction}
          date={date}
          activity={activity || theme.activity.messages[type]}
          reason={reason}
        />
        {attachments && attachments.length > 0 && (
          <TouchableOpacity onPress={() => attachmentsAction && attachmentsAction(attachments)}>
            <Container marginTop flex={1}>
              {attachments.map((item: any, index: number) => {
                return (
                  <Container key={index}>
                    <Credential
                      exp={item.exp}
                      fields={item.fields}
                      subject={subject}
                      issuer={issuer}
                      shadow={(credentialStyle && credentialStyle.shadow) || 1.5}
                      background={(credentialStyle && credentialStyle.background) || 'primary'}
                    />
                  </Container>
                )
              })}
            </Container>
          </TouchableOpacity>
        )}
        {actions && type === 'sdr' && (
          <Container flex={1} marginTop flexDirection={'row'}>
            <Container flex={2} marginRight={5}>
              {confirm && actions[0] && (
                <Button
                  small
                  buttonText={actions[0]}
                  type={BrandOptions.Primary}
                  block={ButtonBlocks.Filled}
                  onPress={() => confirm(message)}
                ></Button>
              )}
            </Container>
            <Container flex={2}>
              {reject && actions[1] && (
                <Button
                  small
                  buttonText={actions[1]}
                  type={BrandOptions.Secondary}
                  block={ButtonBlocks.Filled}
                  onPress={() => reject(message)}
                ></Button>
              )}
            </Container>
          </Container>
        )}
      </Container>
    </Container>
  )
}

export default withTheme(ActivityItem)
