import * as React from 'react'
import { render } from 'react-native-testing-library'
import Modal from '../Modal'
import Text from '../../Text/Text'

jest.mock('react-native-vector-icons/Ionicons', () => 'Icon')

describe('Component(snapshots): Modal', () => {
  it('should render with no props', () => {
    const tree = render(<Modal />)

    expect(tree).toMatchSnapshot()
  })

  it('should render with props', () => {
    const dismiss = jest.fn()

    const tree = render(<Modal scrollEnabled={true} dismiss={dismiss} />)

    expect(tree).toMatchSnapshot()
  })

  it('should render with props and children', () => {
    const dismiss = jest.fn()

    const tree = render(
      <Modal scrollEnabled={true} dismiss={dismiss}>
        <Text>Test Modal</Text>
      </Modal>,
    )

    expect(tree).toMatchSnapshot()
  })
})
