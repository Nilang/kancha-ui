import React from 'react'
import { render } from 'react-native-testing-library'

import Button from '../Button'

describe('Container', () => {
  it('renders correctly', () => {
    const onPress = jest.fn()
    const tree = render(<Button onPress={onPress} />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
