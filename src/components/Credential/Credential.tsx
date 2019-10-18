import * as React from 'react'
import Container from '../Container/Container'
import Text, { TextTypes } from '../Text/Text'
import Avatar from '../Avatar/Avatar'
import Card from '../Card/Card'
import { ImageSourcePropType } from 'react-native'

export interface CredentialProps {
  logo: ImageSourcePropType
  onPress?: () => void
  title: string
  issuer: string
  testID?: string
}

const Credential: React.FC<CredentialProps> = ({ logo, onPress, title, issuer, testID }) => {
  return (
    <Card onPress={onPress} testID={testID} shadow={1}>
      <Container flexDirection={'row'} alignItems={'center'}>
        <Container backgroundColor={'#EAEAEA'}>
          <Avatar source={logo} type={'rounded'} size={40} />
        </Container>
        <Container marginLeft={true} flex={1}>
          <Container paddingBottom={3}>
            <Text bold={true} type={TextTypes.H4}>
              {title}
            </Text>
          </Container>
          <Text type={TextTypes.SubTitle}>{issuer}</Text>
        </Container>
      </Container>
    </Card>
  )
}

export default Credential
