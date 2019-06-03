import React from 'react'
import { render } from 'react-native-testing-library'
import Container from '../Container'
export const add = (a, b) => a + b
describe('add', () => {
  it('should add two numbers', () => {
    expect(add(1, 1)).toEqual(2)
  })
})
describe('App', () => {
  const { getByText } = render(
    React.createElement(Container, { param: 'TEST' }),
  )
  it('should render text', () => {
    expect(getByText(/It's Alive/i)).toBeDefined()
  })
})
