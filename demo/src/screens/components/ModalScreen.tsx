import * as React from 'react'
import { Modal, Container, Text, Constants } from '@kancha/kancha-ui'
import { NavigationScreen } from '../../navigators'

const ModalScreen: React.FC<NavigationScreen> = props => {
  return (
    <Modal dismiss={() => props.navigation.goBack()} scrollEnabled={true}>
      <Container padding={true}>
        <Text type={Constants.TextTypes.H2}>Sample Modal!</Text>
      </Container>
    </Modal>
  )
}

export default ModalScreen
