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
  actions?: any[]

  /**
   * Profile actions like being able to navigate to a profile
   */
  profileAction: (id: string) => void

  theme: any
}

const ActivityItem: React.FC<ActivityItemProps> = ({
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
}) => {
  return (
    <Container flex={1} flexDirection={'row'} background={'primary'} padding marginBottom={10}>
      <Container alignItems={'center'}>
        <Avatar size={40} source={issuer.avatar} />
        <Container marginTop={5}>
          <Icon icon={{ name: incoming ? 'ios-return-right' : 'ios-return-left', iconFamily: 'Ionicons' }} />
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
              <Button
                small
                buttonText={'Action'}
                type={BrandOptions.Primary}
                block={ButtonBlocks.Filled}
                onPress={() => {}}
              ></Button>
            </Container>
            <Container flex={2}>
              <Button
                small
                buttonText={'Action'}
                type={BrandOptions.Secondary}
                block={ButtonBlocks.Filled}
                onPress={() => {}}
              ></Button>
            </Container>
          </Container>
        )}
      </Container>
    </Container>
  )
}

export default withTheme(ActivityItem)
