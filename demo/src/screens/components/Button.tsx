import * as React from 'react'
import { Container, Screen, Section, Button, Constants } from '@kancha/kancha-ui'
import { NavigationScreen } from '../../navigators'
import TEST_ID from '../../../../e2e/testIDs'

const Component: React.FC<NavigationScreen> = () => {
  return (
    <Screen safeArea={true} scrollEnabled={true}>
      <Container testID={TEST_ID.WELCOME}>
        <Section title={'Standard Buttons'}>
          <Container alignItems={'center'} padding={true}>
            <Container w={300} marginBottom={5}>
              <Button
                fullWidth={true}
                type={Constants.BrandOptions.Primary}
                block={Constants.ButtonBlocks.Filled}
                onPress={() => ''}
                buttonText={'Primary Filled'}
              />
            </Container>
            <Container w={300} marginBottom={5}>
              <Button
                fullWidth={true}
                type={Constants.BrandOptions.Primary}
                block={Constants.ButtonBlocks.Outlined}
                onPress={() => ''}
                buttonText={'Primary Outlined'}
              />
            </Container>
            <Container w={300} marginBottom={5}>
              <Button
                fullWidth={true}
                type={Constants.BrandOptions.Primary}
                block={Constants.ButtonBlocks.Clear}
                onPress={() => ''}
                buttonText={'Primary Clear'}
              />
            </Container>
          </Container>
        </Section>
        <Section title={'Shadow Buttons'}>
          <Container alignItems={'center'} padding={true}>
            <Container w={300} marginBottom={5}>
              <Button
                fullWidth={true}
                type={Constants.BrandOptions.Primary}
                block={Constants.ButtonBlocks.Filled}
                onPress={() => ''}
                buttonText={'Primary Filled'}
              />
            </Container>
            <Container w={300} marginBottom={5}>
              <Button
                shadowOpacity={0.3}
                fullWidth={true}
                type={Constants.BrandOptions.Primary}
                block={Constants.ButtonBlocks.Outlined}
                onPress={() => ''}
                buttonText={'Primary Outlined'}
              />
            </Container>
            <Container w={300} marginBottom={5}>
              <Button
                fullWidth={true}
                type={Constants.BrandOptions.Primary}
                block={Constants.ButtonBlocks.Clear}
                onPress={() => ''}
                buttonText={'Primary Clear'}
              />
            </Container>
          </Container>
        </Section>
      </Container>
    </Screen>
  )
}

export default Component
