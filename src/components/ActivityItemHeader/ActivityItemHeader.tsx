import * as React from 'react'
import Text, { TextTypes } from '../Text/Text'
import Container from '../Container/Container'
import * as Kancha from '../../types'
import S from 'string'
import { formatDistanceToNow } from 'date-fns'

interface ActivityItemHeaderProps {
  date: number
  incoming?: boolean
  reason?: string
  activity?: string
  issuer: Kancha.Identity
  subject: Kancha.Identity
  profileAction: (id: string) => void
}

const ActivityItemHeader: React.FC<ActivityItemHeaderProps> = ({
  reason,
  incoming,
  profileAction,
  activity,
  subject,
  issuer,
  date,
}) => {
  return (
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
              <Text type={TextTypes.ActivityTitle} bold onPress={() => profileAction('Show ISSUER Profile')}>
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
      <Text type={TextTypes.ActivitySubTitle}>{formatDistanceToNow(date)} ago</Text>
    </Container>
  )
}

export default ActivityItemHeader
