import * as React from 'react'
import { render } from 'react-native-testing-library'
import ClaimExplore from '../ClaimExplore'

jest.mock('react-native-vector-icons/Ionicons', () => 'Icon')
const rootClaim = {
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
}

const claim = {
  'Serto ID': {
    name: 'Sarah Adamson',
    dateOfBirth: '22-01-75',
    country: 'USA',
    pets: ['fish', 'cats', 'birds'],
    address: {
      houseNumber: 22,
      streetName: 'Privacy Ville',
    },
    children: [
      {
        name: 'Bob',
        age: 4,
      },
      {
        name: 'Alice',
        pets: ['fish', 'cats', 'horses'],
        age: 9,
      },
    ],
  },
}

describe('Component(snapshot): Claim Accordion Explorer', () => {
  it('should render with default props', () => {
    const tree = render(<ClaimExplore claim={claim} />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render with default props', () => {
    const tree = render(<ClaimExplore claim={rootClaim} />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
