import * as React from 'react'
import Container from '../Container/Container'
import Text, { TextTypes } from '../Text/Text'
import Avatar from '../Avatar/Avatar'
import Card from '../Card/Card'
import Icon from '../Icon/Icon'
import * as Kancha from '../../types'
import { withTheme } from '../../theming'
import S from 'string'

export interface CredentialProps {
  onPress?: () => void
  issuer: Kancha.Identity
  subject: Kancha.Identity
  exp: number
  fields: any
  testID?: string
  shadow?: number
  background?: Kancha.BrandPropOptions
  theme: any
}

const Credential: React.FC<CredentialProps> = ({
  shadow,
  onPress,
  issuer,
  background,
  fields,
  subject,
  testID,
  theme,
}) => {
  const subProfileSource = subject.profileImage ? { source: { uri: subject.profileImage } } : {}
  const issProfileSource = issuer.profileImage ? { source: { uri: issuer.profileImage } } : {}
  const credentialFields = Object.keys(fields)

  return (
    <Card onPress={onPress} testID={testID} shadow={shadow || 0} background={background}>
      <Container flexDirection={'row'} alignItems={'flex-start'}>
        <Container>
          <Avatar
            border
            {...subProfileSource}
            address={subject.did}
            type={'circle'}
            gravatarType={'retro'}
            size={40}
          />
          <Container viewStyle={{ position: 'absolute', top: 0, left: 15 }}>
            <Avatar
              border
              {...issProfileSource}
              address={issuer.did}
              type={'circle'}
              gravatarType={'retro'}
              size={40}
            />
          </Container>
        </Container>
        <Container marginLeft={28}>
          <Container>
            <Text bold type={TextTypes.ActivityTitle}>
              {issuer.shortId}
            </Text>
            <Container marginTop={3} flexDirection={'row'} alignItems={'flex-start'}>
              <Container marginRight={5}>
                <Icon
                  icon={{ name: 'ios-play', iconFamily: 'Ionicons' }}
                  size={15}
                  color={theme.colors.primary.text}
                />
              </Container>
              <Text type={TextTypes.ActivityTitle} textStyle={{ fontSize: 15 }}>
                {subject.shortId}
              </Text>
            </Container>
          </Container>
        </Container>
      </Container>
      <Container marginTop>
        {credentialFields.map((key: any, i: number) => {
          const fieldValueImage = !fields[key].isObj
            ? fields[key].value.endsWith('.jpg') || fields[key].value.endsWith('.png')
            : false
          return (
            i < 2 && (
              <Container marginBottom={5} flex={1} alignItems={'flex-start'} key={i}>
                <Container flex={1}>
                  <Text textStyle={{ fontSize: 12, textTransform: 'uppercase' }} type={TextTypes.SubTitle}>
                    {S(fields[key].type).humanize().s}
                  </Text>
                </Container>
                <Container justifyContent={'flex-start'} flex={2}>
                  {fieldValueImage ? (
                    <Container paddingTop={5}>
                      <Avatar
                        source={{ uri: fields[key].value }}
                        address={issuer.did}
                        type={'rounded'}
                        gravatarType={'retro'}
                        size={25}
                      />
                    </Container>
                  ) : (
                    <Text type={TextTypes.ActivityTitle}>
                      {fields[key].isObj ? 'Type not supported yet' : fields[key].value}
                    </Text>
                  )}
                </Container>
              </Container>
            )
          )
        })}
        {credentialFields.length > 2 && (
          <Container>
            <Text type={TextTypes.SubTitle}>...</Text>
          </Container>
        )}
      </Container>
    </Card>
  )
}

export default withTheme(Credential)
