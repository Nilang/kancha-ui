import * as React from 'react'
import { render, fireEvent } from 'react-native-testing-library'
import ListItem from '../ListItem'

const mockOpenURL = jest.fn()
jest.mock('react-native-vector-icons/Ionicons', () => 'Icon')
jest.mock('Linking', () => ({
  openURL: mockOpenURL,
}))

describe('Component(assert): ListItem', () => {
  it('should fire onPress event on list item', () => {
    const onPress = jest.fn()
    const { getByText } = render(<ListItem onPress={onPress}>Regular nav list item</ListItem>)

    fireEvent.press(getByText(/Regular nav list item/i))
    expect(onPress).toHaveBeenCalled()
  })

  it('should fire openUrl linking function with arg', () => {
    const { getByText } = render(<ListItem externalLink={'https://uport.me'}>Open URL Link</ListItem>)

    fireEvent.press(getByText(/Open URL Link/i))
    expect(mockOpenURL).toHaveBeenCalledWith('https://uport.me')
  })
})
