import * as React from 'react'
import { Modal, Container, Text, Constants } from '@kancha/kancha-ui'

const ModalScreen = () => {
  return (
    <Modal dismiss={() => ''} scrollEnabled={true}>
      <Container padding={true}>
        <Text type={Constants.TextTypes.H2}>Sample Modal!</Text>
      </Container>
    </Modal>
  )
}

export default ModalScreen
