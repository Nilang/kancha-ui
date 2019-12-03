import * as React from 'react'
import Text, { TextTypes } from '../Text/Text'
import Container from '../Container/Container'
import * as Kancha from '../../types'
import { formatDistanceToNow } from 'date-fns'

interface ActivityItemHeaderProps {
  // Message hash
  id?: string
  // Timestanp in ms
  date: number
  // Incoming message
  incoming?: boolean
  // Reason text
  reason?: string
  // Activity text
  activity?: string
  // Issuer
  issuer: Kancha.Identity
  // Subject
  subject: Kancha.Identity
  // Profile Action
  profileAction: (id: string) => void
}

const ActivityItemHeader: React.FC<ActivityItemHeaderProps> = ({
  // id,
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
              {issuer.shortId}
            </Text>
            <Text type={TextTypes.ActivityTitle}>&nbsp;{activity}</Text>
            {!incoming && (
              <Text type={TextTypes.ActivityTitle} bold onPress={() => profileAction('Show ISSUER Profile')}>
                &nbsp;{issuer.shortId}
              </Text>
            )}
            <Text type={TextTypes.ActivityTitle}>&nbsp;so {subject.shortId}</Text>
            <Text type={TextTypes.ActivityTitle} bold>
              &nbsp;{reason}
            </Text>
          </Text>
        ) : (
          <Text>
            <Text
              type={TextTypes.ActivityTitle}
              bold
              onPress={() => profileAction(incoming ? 'Show ISSUER Profile' : 'Show SUBJECT Profile')}
            >
              {issuer.shortId}
            </Text>
            <Text type={TextTypes.ActivityTitle}>&nbsp;{activity}</Text>
            <Text type={TextTypes.ActivityTitle} bold onPress={() => profileAction('Show SUBJECT Profile')}>
              &nbsp;{subject.shortId}
            </Text>
          </Text>
        )}
      </Container>
      <Text type={TextTypes.ActivitySubTitle}>{formatDistanceToNow(date)} ago</Text>
    </Container>
  )
}

export default ActivityItemHeader
