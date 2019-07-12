import * as React from 'react'
import { render } from 'react-native-testing-library'
import RequestItem from '../RequestItem'

describe('Component(snapshot): RequestItem', () => {
  it('should render with default props', () => {
    const tree = render(<RequestItem>Hello Test</RequestItem>).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render with all default props', () => {
    const tree = render(
      <RequestItem subTitle={'Subtitle'} itemNote={'Test Note'} last={true}>
        Hello Test
      </RequestItem>,
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
