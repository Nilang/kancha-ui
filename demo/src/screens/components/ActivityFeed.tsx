import React from 'react'
import { Container, Screen, ActivityItem, Constants, Text } from '@kancha/kancha-ui'
import { NavigationScreen, Screens } from '../../navigators'

const activityFeed = require('../../data/activity_feed.json')

const Component: React.FC<NavigationScreen> = props => {
  const showAttachment = (att: any) => {
    /**
     * Some sort of attahment parser to figure out what view to show
     */
    console.log(att)
  }

  const displayProfile = (id: any) => {
    /**
     * Display a profile screen
     */
    props.navigation.navigate(Screens.Profile, { id })
    console.log(id)
  }

  return (
    <Screen safeAreaTop={true} safeAreaBottom={false} scrollEnabled={true}>
      <Container>
        <Container padding>
          <Text type={Constants.TextTypes.H5} bold>
            Today
          </Text>
        </Container>
        {activityFeed.map((feedItem: any, index: number) => {
          return (
            <ActivityItem
              key={index}
              {...feedItem}
              attachmentsAction={(att: any) => showAttachment(att)}
              profileAction={(id: any) => displayProfile(id)}
            />
          )
        })}
      </Container>
    </Screen>
  )
}

export default Component
