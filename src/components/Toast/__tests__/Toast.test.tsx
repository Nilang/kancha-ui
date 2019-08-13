import React from 'react'
import { render } from 'react-native-testing-library'
import Toast, { Toaster, ToastEmitter } from '../Toast'

jest.mock('react-native-vector-icons/Ionicons', () => 'Icon')

describe('Component(assert): Toast', () => {
  ToastEmitter.emit = jest.fn()
  ToastEmitter.addListener = jest.fn()

  it('sets up an event listener on render', () => {
    render(<Toast />)

    expect(ToastEmitter.addListener).toHaveBeenCalled()
  })

  it('fires the event emitter for confirm', () => {
    Toaster.confirm('Title', 'Content')

    expect(ToastEmitter.emit).toHaveBeenCalled()
  })

  it('fires the event emitter for info', () => {
    Toaster.info('Title', 'Content')

    expect(ToastEmitter.emit).toHaveBeenCalled()
  })

  it('fires the event emitter for warn', () => {
    Toaster.warn('Title', 'Content')

    expect(ToastEmitter.emit).toHaveBeenCalled()
  })

  it('fires the event emitter for error', () => {
    Toaster.error('Title', 'Content')

    expect(ToastEmitter.emit).toHaveBeenCalled()
  })
})
