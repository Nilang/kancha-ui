import * as React from 'react'
import { render, fireEvent } from 'react-native-testing-library'
import ActivityItem from '../ActivityItem'

const ATTACHMENT_1 = {
  key: 1,
  title: 'Test Attachment 1',
  issuer: { name: 'Test Issuer 1', did: '0x1efgh', avatar: '' },
  attachmentType: 'Credential',
  claim: {},
}

const ATTACHMENT_2 = {
  key: 2,
  title: 'Test Attachment 2',
  issuer: { name: 'Test Issuer 2', did: '0x1efghss', avatar: '' },
  attachmentType: 'Credential',
  claim: {},
}

describe('Component(snapshots): ActivityItem', () => {
  const baseProps = {
    id: 'ZFGHFSJD',
    date: 123445678910,
    issuer: { name: 'Test Issuer', did: 'ethr:did:123456', avatar: { uri: 'http://' } },
    subject: { name: 'Test Subject', did: 'ethr:did:123456', avatar: { uri: 'http://' } },
    activity: 'testing the components',
    profileAction: () => {},
    // attachmentsAction: () => {},
    // attachments: [],
    // actions: [],
    // confirm: () => {},
    // reject: () => {},
  }

  it('should render with default required props', () => {
    const tree = render(<ActivityItem incoming={false} {...baseProps} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render with attachments', () => {
    const attachments = [ATTACHMENT_1, ATTACHMENT_2]
    const attachmentAction = jest.fn()

    const tree = render(
      <ActivityItem
        incoming={true}
        attachments={attachments}
        attachmentsAction={attachmentAction}
        {...baseProps}
      />,
    )
    expect(tree.toJSON).toMatchSnapshot()

    fireEvent.press(tree.getByText(/Test Attachment 1/i))

    expect(attachmentAction).toHaveBeenCalledWith(attachments)
  })

  it('should render with actions', () => {
    const actions = ['Confirm', 'Reject']
    const confirm = jest.fn()
    const reject = jest.fn()

    const tree = render(
      <ActivityItem incoming={true} actions={actions} confirm={confirm} reject={reject} {...baseProps} />,
    )
    expect(tree.toJSON).toMatchSnapshot()

    fireEvent.press(tree.getByText(/Confirm/i))
    expect(confirm).toHaveBeenCalledWith(baseProps.id)

    fireEvent.press(tree.getByText(/Reject/i))
    expect(reject).toHaveBeenCalledWith(baseProps.id)
  })
})
