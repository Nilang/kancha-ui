import * as React from 'react'
import Container from '../Container/Container'
import Text, { TextTypes } from '../Text/Text'
import { TextInput } from 'react-native'
import { withTheme } from '../../theming'

interface InlineCredentialProps {
  claimType: string
  theme: any
}

const InlineCredential: React.FC<InlineCredentialProps> = ({ claimType, theme }) => {
  return (
    <Container>
      <Text type={TextTypes.SectionHeader}>
        Self sign a <Text>{claimType}</Text> credential
      </Text>
      <Container
        padding
        marginBottom
        marginTop
        br={5}
        borderWidth={1}
        borderColor={theme.colors.primary.divider}
      >
        <Container>
          <Text type={TextTypes.SubTitle}>{claimType}</Text>
        </Container>
        <TextInput
          autoCapitalize={'none'}
          autoCorrect={false}
          style={{ fontSize: 19, padding: 0, marginTop: 5, flex: 1, color: '#000000' }}
          placeholder={'Enter ' + claimType}
        />
      </Container>
    </Container>
  )
}

export default withTheme(InlineCredential)
