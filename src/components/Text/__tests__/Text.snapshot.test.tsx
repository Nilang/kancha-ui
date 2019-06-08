import React from 'react'
import { render } from 'react-native-testing-library'

import Text from '../Text'

describe('Container', () => {
  it('renders correctly', () => {
    const tree = render(<Text>Hello World</Text>).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
