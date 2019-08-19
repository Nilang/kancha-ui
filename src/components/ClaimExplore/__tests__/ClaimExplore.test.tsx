import * as React from 'react'
import { render, fireEvent } from 'react-native-testing-library'
import ClaimExplore from '../ClaimExplore'
import { LayoutAnimation } from 'react-native'

jest.mock('react-native-vector-icons/Ionicons', () => 'Icon')

const claim = {
  'Serto ID': {
    name: 'Sarah Adamson',
    dateOfBirth: '22-01-75',
    country: 'USA',
    photoID: 'https://somewebsite.jpg',
    pets: ['fish', 'cats', 'birds'],
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
}

describe('Component(assert): Claim Accordion Explorer', () => {
  LayoutAnimation.configureNext = jest.fn()

  it('should render with default props', () => {
    const { getByText } = render(<ClaimExplore claim={claim} />)

    expect(getByText(/Date Of Birth/i)).toBeDefined()
    expect(getByText(/Sarah Adamson/i)).toBeDefined()
    expect(getByText(/22-01-75/i)).toBeDefined()
    expect(getByText(/22-01-75/i)).toBeDefined()

    fireEvent.press(getByText(/Children/i))
    expect(LayoutAnimation.configureNext).toBeCalled()
    expect(getByText(/Alice/i)).toBeDefined()
    expect(getByText(/Bob/i)).toBeDefined()

    fireEvent.press(getByText(/Pets/i))
    expect(LayoutAnimation.configureNext).toBeCalled()
    expect(getByText(/Fish/i)).toBeDefined()
    expect(getByText(/Cats/i)).toBeDefined()
    expect(getByText(/Birds/i)).toBeDefined()
  })
})
