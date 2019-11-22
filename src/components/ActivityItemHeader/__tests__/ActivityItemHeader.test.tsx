import * as React from 'react'
import { render, fireEvent } from 'react-native-testing-library'
import ActivityHeader from '../ActivityItemHeader'

describe('Component(assert): ActivityHeader', () => {
  const action = jest.fn()
  const baseProps = {
    id: 'ZFGHFSJD',
    date: 123445678910,
    issuer: {
      name: 'Test Issuer',
      did: 'ethr:did:123456',
      avatar: { uri: 'http://' },
      shortId: 'Test Issuer',
    },
    subject: { name: 'subject', did: 'ethr:did:123456', avatar: { uri: 'http://' }, shortId: 'Test Issuer' },
    profileAction: action,
  }

  it('incoming:true with reason should call profile action when pressed', () => {
    const { getByText } = render(
      <ActivityHeader incoming={true} reason={'to test the components'} {...baseProps} />,
    )
    fireEvent.press(getByText(/Test Issuer/i))

    expect(action).toBeCalled()
  })

  it('incoming:false with reason should call profile action when pressed', () => {
    const { getByText, getAllByText } = render(
      <ActivityHeader incoming={false} reason={'to test the components'} {...baseProps} />,
    )

    fireEvent.press(getByText(/Test Issuer/i))
    fireEvent.press(getAllByText(/Subject/i)[0])

    expect(action).toBeCalled()
  })

  it('incoming:true with reason should call profile action when pressed', () => {
    const { getByText } = render(
      <ActivityHeader incoming={true} reason={'to test the components'} {...baseProps} />,
    )

    fireEvent.press(getByText(/Test Issuer/i))

    expect(action).toBeCalled()
  })

  it('incoming:true without reason should call profile action when pressed', () => {
    const { getByText } = render(<ActivityHeader incoming={true} {...baseProps} />)

    fireEvent.press(getByText(/Test Issuer/i))

    expect(action).toBeCalled()
  })

  it('incoming:false without reason should call profile action when pressed', () => {
    const { getByText, getAllByText } = render(<ActivityHeader incoming={false} {...baseProps} />)

    fireEvent.press(getByText(/Test Issuer/i))
    fireEvent.press(getAllByText(/Subject/i)[0])

    expect(action).toBeCalled()
  })
})
