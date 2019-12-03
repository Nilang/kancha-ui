import * as React from 'react'
import Container from '../Container/Container'
import Text, { TextTypes } from '../Text/Text'
import Avatar from '../Avatar/Avatar'
import Card from '../Card/Card'
import * as Kancha from '../../types'
import { withTheme } from '../../theming'

export interface CredentialProps {
  onPress?: () => void
  issuer: Kancha.Identity
  subject: Kancha.Identity
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
  testID,
  theme,
}) => {
  // const subProfileSource = subject.profileImage ? { source: { uri: subject.profileImage } } : {}
  const issProfileSource = issuer.profileImage ? { source: { uri: issuer.profileImage } } : {}
  const credentialFields = Object.keys(fields)

  return (
    <Card onPress={onPress} testID={testID} shadow={shadow || 0} background={background}>
      <Container flexDirection={'row'} alignItems={'flex-start'}>
        <Container backgroundColor={'#EAEAEA'}>
          <Avatar
            {...issProfileSource}
            address={issuer.did}
            type={'rounded'}
            gravatarType={'retro'}
            size={40}
          />
        </Container>
        <Container marginLeft={true}>
          <Container paddingBottom={3}>
            <Text type={TextTypes.SubTitle} textStyle={{ fontSize: 10 }}>
              ISSUED BY
            </Text>
            <Text bold type={TextTypes.ActivityTitle}>
              {issuer.shortId}
            </Text>
          </Container>
          <Container>
            {credentialFields.map((key: any, i: number) => {
              const fieldValueImage = fields[key].value.endsWith('.jpg') || fields[key].value.endsWith('.png')
              return (
                i < 2 && (
                  <Container flexDirection={'row'} alignItems={'center'} marginBottom={3}>
                    <Container>
                      {fieldValueImage ? (
                        <Avatar
                          source={{ uri: fields[key].value }}
                          address={issuer.did}
                          type={'circle'}
                          gravatarType={'retro'}
                          size={20}
                        />
                      ) : (
                        <Text type={TextTypes.SubTitle}>
                          {fields[key].isObj ? 'Not supported yet' : fields[key].value}
                        </Text>
                      )}
                    </Container>
                    <Text
                      textStyle={{ fontSize: 12, color: theme.colors.accent.text }}
                      type={TextTypes.SubTitle}
                    >
                      {' '}
                      {fields[key].type}
                    </Text>
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
        </Container>
      </Container>
    </Card>
  )
}

export default withTheme(Credential)
