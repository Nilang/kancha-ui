import * as React from 'react'
import { render, fireEvent } from 'react-native-testing-library'
import Credential from '../Credential'

describe('Component(snapshot): Credential', () => {
  it('should render with default props', () => {
    const tree = render(
      <Credential title={'Test Title'} issuer={'Test Issuer'} logo={{ uri: '' }} />,
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should fire on press event', () => {
    const onPress = jest.fn()
    const { getByTestId } = render(
      <Credential
        title={'Test Title'}
        issuer={'Test Issuer'}
        logo={{ uri: '' }}
        onPress={onPress}
        testID={'CREDENTIAL_BTN'}
      />,
    )

    fireEvent.press(getByTestId('CREDENTIAL_BTN'))
    expect(onPress).toHaveBeenCalled()
  })
})
