import React from 'react'
import { render } from 'react-native-testing-library'

import Container from '../Container'

describe('Container', () => {
  it('renders correctly', () => {
    const tree = render(<Container />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
