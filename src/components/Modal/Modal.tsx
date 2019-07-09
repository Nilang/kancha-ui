import * as React from 'react'
import Container from '../Container/Container'
import { ScrollView, StatusBar } from 'react-native'
import { withTheme } from '../../theming'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'

interface ModalProps {
  /**
   * Enable scrollView
   */
  scrollEnabled?: boolean

  /**
   * Dismiss the modal view
   */
  dismiss?: () => void

  theme: any
}

const Modal: React.FC<ModalProps> = props => {
  const scrollViewContent = <ScrollView>{props.children}</ScrollView>

  return (
    <Container
      flex={1}
      marginTop={50}
      marginLeft={10}
      marginRight={10}
      backgroundColor={'#ffffff'}
      viewStyle={{
        shadowColor: '#000000',
        shadowRadius: 20,
        shadowOpacity: 0.2,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      }}
    >
      <StatusBar hidden={true} animated={true} showHideTransition={'slide'} />
      {props.dismiss && (
        <Container viewStyle={{ position: 'absolute', right: 10, top: 10 }}>
          <Button
            iconButton={true}
            icon={
              <Icon icon={props.theme.icons.CLOSE} color={props.theme.colors.primary.accessory} size={40} />
            }
            onPress={props.dismiss}
          />
        </Container>
      )}
      {props.scrollEnabled ? scrollViewContent : props.children}
    </Container>
  )
}

export default withTheme(Modal)
