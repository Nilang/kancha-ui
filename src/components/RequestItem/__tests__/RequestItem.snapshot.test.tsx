import * as React from 'react'
import { render } from 'react-native-testing-library'
import RequestItem from '../RequestItem'

jest.mock('react-native-vector-icons/Ionicons', () => 'Icon')

const singleOption = [
  {
    id: 'TEST_ID',
    iss: { shortId: 'Serto Verified', did: '0xfksksdk' },
    type: 'Test property',
    value: 'Test value',
    selected: true,
  },
]

const multiOptions = [
  {
    id: 'TEST_ID_01',
    iss: { shortId: 'Serto Verified', did: '0xfksksdk' },
    type: 'Test property',
    value: 'Test value 01',
    selected: true,
  },
  {
    id: 'TEST_ID_02',
    iss: { shortId: 'Serto Verified', did: '0xfksksdk' },
    type: 'Test property',
    value: 'Test value 02',
    selected: false,
  },
]

describe('Component(snapshot): RequestItem', () => {
  it('should render required with single option', () => {
    const onSelect = jest.fn()
    const tree = render(
      <RequestItem claimType={'Test'} options={singleOption} onSelectItem={onSelect} />,
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render un-required with single option', () => {
    const onSelect = jest.fn()
    const tree = render(
      <RequestItem required={false} claimType={'Test'} options={singleOption} onSelectItem={onSelect} />,
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render required with multi options', () => {
    const onSelect = jest.fn()
    const tree = render(
      <RequestItem
        required={true}
        claimType={'Subtitle'}
        itemNote={'Test Note'}
        last={true}
        options={multiOptions}
        onSelectItem={onSelect}
      />,
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render un-required with multi options', () => {
    const onSelect = jest.fn()
    const tree = render(
      <RequestItem
        required={false}
        claimType={'Subtitle'}
        itemNote={'Test Note'}
        last={true}
        options={multiOptions}
        onSelectItem={onSelect}
      />,
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
