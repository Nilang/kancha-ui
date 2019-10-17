import * as React from 'react'
import { ImageSourcePropType, TouchableOpacity } from 'react-native'
import Container from '../Container/Container'
import Button, { ButtonBlocks } from '../Button/Button'
import Avatar from '../Avatar/Avatar'
import { BrandOptions } from '../../constants'
import Icon from '../Icon/Icon'
import Text, { TextTypes } from '../Text/Text'
import Credential from '../../components/Credential/Credential'
import { withTheme } from '../../theming'
import S from 'string'
import { formatDistanceToNow } from 'date-fns'

interface Actor {
  name: string
  did: string
  avatar: ImageSourcePropType
}

interface ActivityItemProps {
  /**
   * The timestamp for when this message was recieved or sent
   */
  date: number

  /**
   * The issuer of this message item
   */
  issuer: Actor

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
  subject: Actor

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
        <Container>
          <Container flex={1} marginBottom={4}>
            {reason ? (
              <Text>
                <Text
                  type={TextTypes.ActivityTitle}
                  bold
                  onPress={() => profileAction(incoming ? 'Show ISSUER Profile' : 'Show MY Profile')}
                >
                  {incoming ? issuer.name : S(subject.name).capitalize().s}
                </Text>
                <Text type={TextTypes.ActivityTitle}>&nbsp;{activity}</Text>
                {!incoming && (
                  <Text
                    type={TextTypes.ActivityTitle}
                    bold
                    onPress={() => profileAction('Show ISSUER Profile')}
                  >
                    &nbsp;{issuer.name}
                  </Text>
                )}
                <Text type={TextTypes.ActivityTitle}>&nbsp;so {subject.name}</Text>
                <Text type={TextTypes.ActivityTitle} bold>
                  &nbsp;{reason}
                </Text>
              </Text>
            ) : (
              <Text>
                <Text
                  type={TextTypes.ActivityTitle}
                  bold
                  onPress={() => profileAction(incoming ? 'Show ISSUER Profile' : 'Show MY Profile')}
                >
                  {incoming ? issuer.name : S(subject.name).capitalize().s}
                </Text>
                <Text type={TextTypes.ActivityTitle}>&nbsp;{activity}</Text>
                <Text
                  type={TextTypes.ActivityTitle}
                  bold
                  onPress={() => !incoming && profileAction('Show ISSUER Profile')}
                >
                  &nbsp;{!incoming && issuer.name}
                </Text>
              </Text>
            )}
          </Container>
          <Text type={TextTypes.ActivitySubTitle}>{formatDistanceToNow(date)}</Text>
        </Container>
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
