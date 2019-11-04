import * as React from 'react'
import { TouchableOpacity } from 'react-native'
import Container from '../Container/Container'
import Button, { ButtonBlocks } from '../Button/Button'
import Avatar from '../Avatar/Avatar'
import Icon from '../Icon/Icon'
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
  activity: string

  /**
   * If the message item was initiated by the the issuer or is a response
   */
  incoming?: boolean

  /**
   * The viewer. In this cane will always be 'You' or 'My'
   */
  subject: Kancha.Identity

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
  confirm?: (id: string) => void

  /*
   * The reject action
   */
  reject?: (id: string) => void

  /**
   * Profile actions like being able to navigate to a profile
   */
  profileAction: (id: string) => void

  /**
   * Theme prop
   */
  theme: any
}

const ActivityItem: React.FC<ActivityItemProps> = ({
  id,
  incoming,
  activity,
  issuer,
  subject,
  reason,
  attachments,
  attachmentsAction,
  actions,
  profileAction,
  date,
  confirm,
  reject,
  theme,
}) => {
  return (
    <Container flex={1} flexDirection={'row'} background={'primary'} padding marginBottom={10}>
      <Container alignItems={'center'}>
        <Avatar size={40} source={issuer.avatar} />
        <Container marginTop={5}>
          <Icon icon={incoming ? theme.icons.INCOMING_ITEM : theme.icons.OUTGOING_ITEM} />
        </Container>
      </Container>
      <Container marginLeft paddingRight flex={1}>
        <ActivityItemHeader
          incoming={incoming}
          issuer={issuer}
          subject={subject}
          profileAction={profileAction}
          date={date}
          activity={activity}
          reason={reason}
        />
        {attachments && (
          <TouchableOpacity onPress={() => attachmentsAction && attachmentsAction(attachments)}>
            <Container h={100} marginTop flex={1}>
              {attachments.map((item: any, index: number) => {
                return (
                  <Container
                    key={item.key}
                    viewStyle={{
                      position: 'absolute',
                      top: index * 10,
                      left: index * 10,
                      right: -index * 10,
                    }}
                  >
                    <Credential title={item.title} logo={item.issuer.logo} issuer={item.issuer.name} />
                  </Container>
                )
              })}
            </Container>
          </TouchableOpacity>
        )}
        {actions && (
          <Container flex={1} marginTop flexDirection={'row'}>
            <Container flex={2} marginRight={5}>
              {confirm && actions[0] && (
                <Button
                  small
                  buttonText={actions[0]}
                  type={BrandOptions.Primary}
                  block={ButtonBlocks.Filled}
                  onPress={() => confirm(id)}
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
                  onPress={() => reject(id)}
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
