import React from 'react'
import { render } from 'react-native-testing-library'

import Button from '../Button'

describe('Container', () => {
  it('renders correctly', () => {
    const onPress = jest.fn()
    const tree = render(<Button onPress={onPress} />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders a nav button correctly', () => {
    const onPress = jest.fn()
    const tree = render(<Button onPress={onPress} navButton={true} />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders a disabled button correctly', () => {
    const onPress = jest.fn()
    const tree = render(<Button onPress={onPress} disabled={true} />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
