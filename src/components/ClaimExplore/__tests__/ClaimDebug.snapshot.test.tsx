import * as React from 'react'
import { render } from 'react-native-testing-library'
import ClaimDebug from '../ClaimDebug'

const claim = {
  iss: 'did:ethr:0xb9c5714089478a327f09197987f16f9e5d936e8a',
  sub: 'did:ethr:0xf3beac30c498d9e26865f34fcaa57dbb935b0d74',
  type: 'Sample Claim',
  iat: 1562769371,
  exp: 1579478400,
  claim: {
    'Serto ID': {
      name: 'Sarah Adamson',
      dateOfBirth: '22-01-75',
      country: 'USA',
      children: [
        {
          name: 'Bob',
          age: 4,
        },
        {
          name: 'Alice',
          age: 9,
        },
      ],
    },
  },
  vc: [],
}

describe('Component(snapshot): Claim Viewer Debug', () => {
  it('should render with default props', () => {
    const tree = render(<ClaimDebug {...claim} />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render with cardview', () => {
    const tree = render(<ClaimDebug {...claim} cardView={true} />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
