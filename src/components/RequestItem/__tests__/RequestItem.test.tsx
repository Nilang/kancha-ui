import * as React from 'react'
import { render, fireEvent, act } from 'react-native-testing-library'
import RequestItem from '../RequestItem'

jest.mock('react-native-vector-icons/Ionicons', () => 'Icon')

const singleOption = [
  {
    id: 'TEST_ID',
    iss: 'Serto Verified',
    property: 'Test property',
    value: 'Single Option Selected',
    selected: true,
  },
]

const multiOptions = [
  {
    id: 'TEST_ID_01',
    iss: 'Serto Verified',
    property: 'Test property',
    value: 'Multi Option A Selected',
    selected: true,
  },
  {
    id: 'TEST_ID_02',
    iss: 'Serto Verified',
    property: 'Test property',
    value: 'Multi Option B Selected',
    selected: false,
  },
]

describe('Component(assert): RequestItem', () => {
  it('should display the selected option', () => {
    const { getByText } = render(<RequestItem subTitle={'Test title'} options={singleOption} />)

    expect(getByText(/Single Option Selected/i)).toBeDefined()
  })

  it('should fire the event to open accordion, select options and stay open', () => {
    const { getByText, getAllByText } = render(
      <RequestItem
        subTitle={'Test title'}
        options={multiOptions}
        closeAfterSelect={false}
        required={false}
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
    const { getByText, getAllByText } = render(
      <RequestItem subTitle={'Test title'} options={multiOptions} closeAfterSelect={true} />,
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
