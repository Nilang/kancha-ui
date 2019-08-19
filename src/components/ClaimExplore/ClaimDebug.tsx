import * as React from 'react'
import Container from '../Container/Container'
import ListItem from '../ListItem/ListItem'
import Section from '../Section/Section'
import { withTheme } from '../../theming'
import JSONTree from 'react-native-json-tree'
import { VerifiableCredential } from '../../types'

interface ClaimDebug extends VerifiableCredential {
  cardView?: boolean
  theme: any
}

/**
 * For debugging claims.
 * The typings adhere to specs -> https://github.com/uport-project/specs/blob/develop/messages/verification.md
 */
const ClaimDebug: React.FC<ClaimDebug> = props => {
  const cardViewProps = {
    backgroundColor: props.theme.colors.primary.background,
    shadowColor: '#000000',
    shadowRadius: 20,
    shadowOpacity: 0.2,
    borderRadius: 10,
    margin: 10,
    paddingBottom: 10,
  }

  return (
    <Container viewStyle={{ ...(props.cardView ? cardViewProps : {}) }}>
      <Section title={'Claim'}>
        <JSONTree
          hideRoot={true}
          invertTheme={false}
          data={props.claim}
          theme={{
            scheme: 'ocean',
            author: 'chris kempson (http://chriskempson.com)',
            base00: '#2b303b',
            base01: '#343d46',
            base02: '#4f5b66',
            base03: '#65737e',
            base04: '#a7adba',
            base05: '#c0c5ce',
            base06: '#dfe1e8',
            base07: '#eff1f5',
            base08: '#bf616a',
            base09: '#d08770',
            base0A: '#ebcb8b',
            base0B: '#a3be8c',
            base0C: '#96b5b4',
            base0D: '#8fa1b3',
            base0E: '#b48ead',
            base0F: '#ab7967',
          }}
        />
        <ListItem subTitle={'Issuer'}>{props.iss}</ListItem>
        <ListItem subTitle={'Subject'}>{props.sub}</ListItem>
        <ListItem subTitle={'Type'}>{props.type}</ListItem>
        <ListItem subTitle={'Issue Date'}>{props.iat}</ListItem>
        <ListItem last={true} subTitle={'Expiry Date'}>
          {props.exp}
        </ListItem>
      </Section>
    </Container>
  )
}

export default withTheme(ClaimDebug)
