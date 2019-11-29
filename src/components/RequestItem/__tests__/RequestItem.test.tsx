import * as React from 'react'
import { render, fireEvent, act } from 'react-native-testing-library'
import RequestItem from '../RequestItem'

jest.mock('react-native-vector-icons/Ionicons', () => 'Icon')

const singleOption = [
  {
    id: 'TEST_ID',
    iss: { shortId: 'Serto Verified', did: '0xfksksdk' },
    type: 'Test property',
    value: 'Single Option Selected',
    selected: true,
  },
]

const multiOptions = [
  {
    id: 'TEST_ID_01',
    iss: { shortId: 'Serto Verified', did: '0xfksksdk' },
    type: 'Test property',
    value: 'Multi Option A Selected',
    selected: true,
  },
  {
    id: 'TEST_ID_02',
    iss: { shortId: 'Serto Verified', did: '0xfksksdk' },
    type: 'Test property',
    value: 'Multi Option B Selected',
    selected: false,
  },
]

describe('Component(assert): RequestItem', () => {
  it('should display the selected option', () => {
    const onSelect = jest.fn()
    const { getByText } = render(
      <RequestItem claimType={'Test title'} options={singleOption} onSelectItem={onSelect} />,
    )

    expect(getByText(/Single Option Selected/i)).toBeDefined()
  })

  it('should fire the event to open accordion, select options and stay open', () => {
    const onSelect = jest.fn()
    const { getByText, getAllByText } = render(
      <RequestItem
        claimType={'Test title'}
        options={multiOptions}
        closeAfterSelect={false}
        required={false}
        onSelectItem={onSelect}
      />,
    )

    expect(getByText(/Multi Option A Selected/i)).toBeDefined()

    act(() => {
      fireEvent.press(getByText(/Multi Option A Selected/i))
    })

    expect(getAllByText(/Multi Option A Selected/i)).toHaveLength(2)
    expect(getByText(/Multi Option B Selected/i)).toBeDefined()

    act(() => {
      fireEvent.press(getByText(/Multi Option B Selected/i))
    })

    expect(getByText(/Do not share/i)).toBeDefined()
    expect(getAllByText(/Multi Option B Selected/i)).toHaveLength(2)
    expect(getByText(/Multi Option A Selected/i)).toBeDefined()

    act(() => {
      fireEvent.press(getByText(/Do not share/i))
    })

    expect(getByText(/Not Shared/i)).toBeDefined()
    expect(getByText(/Do not share/i)).toBeDefined()
    expect(getByText(/Multi Option B Selected/i)).toBeDefined()
    expect(getByText(/Multi Option A Selected/i)).toBeDefined()
  })

  it('should fire the event to open accordion, select options and close', () => {
    const onSelect = jest.fn()
    const { getByText, getAllByText } = render(
      <RequestItem
        claimType={'Test title'}
        options={multiOptions}
        closeAfterSelect={true}
        onSelectItem={onSelect}
      />,
    )

    expect(getByText(/Multi Option A Selected/i)).toBeDefined()

    act(() => {
      fireEvent.press(getByText(/Multi Option A Selected/i))
    })

    expect(getAllByText(/Multi Option A Selected/i)).toHaveLength(2)
    expect(getByText(/Multi Option B Selected/i)).toBeDefined()

    act(() => {
      fireEvent.press(getByText(/Multi Option B Selected/i))
    })

    expect(getByText(/Multi Option B Selected/i)).toBeDefined()

    act(() => {
      fireEvent.press(getByText(/Multi Option B Selected/i))
    })

    expect(getByText(/Do not share/i)).toBeDefined()

    act(() => {
      fireEvent.press(getByText(/Do not share/i))
    })

    expect(getByText(/Not Shared/i)).toBeDefined()
  })
})
