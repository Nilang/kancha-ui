import * as React from 'react'
import { render } from 'react-native-testing-library'
import RequestItem from '../RequestItem'

jest.mock('react-native-vector-icons/Ionicons', () => 'Icon')

const singleOption = [
  {
    id: 'TEST_ID',
    iss: 'Serto Verified',
    property: 'Test property',
    value: 'Test value',
    selected: true,
  },
]

const multiOptions = [
  {
    id: 'TEST_ID_01',
    iss: 'Serto Verified',
    property: 'Test property',
    value: 'Test value 01',
    selected: true,
  },
  {
    id: 'TEST_ID_02',
    iss: 'Serto Verified',
    property: 'Test property',
    value: 'Test value 02',
    selected: false,
  },
]

describe('Component(snapshot): RequestItem', () => {
  it('should render required with single option', () => {
    const tree = render(<RequestItem options={singleOption} />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render un-required with single option', () => {
    const tree = render(<RequestItem required={false} options={singleOption} />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render required with multi options', () => {
    const tree = render(
      <RequestItem
        required={true}
        subTitle={'Subtitle'}
        itemNote={'Test Note'}
        last={true}
        options={multiOptions}
      />,
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render un-required with multi options', () => {
    const tree = render(
      <RequestItem
        required={false}
        subTitle={'Subtitle'}
        itemNote={'Test Note'}
        last={true}
        options={multiOptions}
      />,
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
