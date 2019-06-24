import React, { useState } from 'react'
import { Container, Text, Constants, Button, Screen, Icon, LogItem, ListItem } from '@kancha/kancha-ui'
import { Icons, Colors } from '../theme'

import TEST_ID from '../../../e2e/testIDs'

interface Props {}

const App: React.FC<Props> = () => {
  const [isVisible, toggleVisible] = useState(false)

  return (
    <Screen
      scrollEnabled={true}
      footerDivider={true}
      safeArea={true}
      footerComponent={
        <Container paddingHorizontal={true} paddingBottom={true}>
          <Container flexDirection={'row'}>
            <Container flex={1}>
              <Button
                block={Constants.ButtonBlocks.Clear}
                type={Constants.BrandOptions.Warning}
                buttonText={'Decline'}
                onPress={() => ''}
              />
            </Container>
            <Container flex={1}>
              <Button
                icon={<Icon icon={Icons.SETTINGS} color={Colors.WHITE} />}
                block={Constants.ButtonBlocks.Filled}
                type={Constants.BrandOptions.Primary}
                buttonText={'Decline'}
                onPress={() => ''}
              />
            </Container>
          </Container>
        </Container>
      }
    >
      <Container testID={TEST_ID.WELCOME} paddingTop={100}>
        <Text bold={true} textAlign={'center'} type={Constants.TextTypes.H3}>
          🚀Hey, It's Kancha Demo! 🎉
        </Text>
        <Container paddingTop={50} paddingHorizontal={30}>
          <Button
            testID={TEST_ID.WELCOME_BUTTON}
            icon={<Icon icon={Icons.SETTINGS} color={Colors.WHITE} />}
            fullWidth={true}
            onPress={() => toggleVisible(!isVisible)}
            buttonText={'Tap me'}
            type={Constants.BrandOptions.Primary}
            block={Constants.ButtonBlocks.Filled}
          />
        </Container>
        <Container justifyContent={'center'} padding={true} flexDirection={'row'}>
          <Icon icon={Icons.SETTINGS} color={Colors.ACCENT} />
          <Icon icon={Icons.ALARM} />
        </Container>
        {isVisible && (
          <Container paddingHorizontal={30}>
            <Text testID={TEST_ID.VISIBLE_TEXT}>Hello, I'm visible now!</Text>
          </Container>
        )}

        <ListItem selected={true}>Some basic list item</ListItem>
        <ListItem editMode={true}>Some basic list item</ListItem>
        <ListItem editMode={true}>Some basic list item</ListItem>

        <LogItem message={'This could be an error'} category={'Demo app'} type={0} time={'Just now'} />
        <LogItem message={'This could be an error'} category={'Demo app'} type={1} time={'Just now'} />
        <LogItem message={'This could be an error'} category={'Demo app'} type={2} time={'Just now'} />
        <LogItem message={'This could be an error'} category={'Demo app'} type={1} time={'Just now'} />
        <LogItem message={'This could be an error'} category={'Demo app'} type={2} time={'Just now'} />
      </Container>
    </Screen>
  )
}

export default App
