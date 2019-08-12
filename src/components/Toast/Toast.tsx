import React, { useState, useEffect } from 'react'
import { Container, Text, Constants } from '@kancha/kancha-ui'
import { withTheme } from '../../theming'
import { Animated } from 'react-native'
import EventEmitter from 'eventemitter3'

const ToastEmitter = new EventEmitter()
const SHOW_TOAST = 'SHOW_TOAST'

type ToastType = 'alert' | 'info' | 'error' | 'confirm' | null

interface ToastProps {
  theme: any
}

interface ToastMessage {
  title: string
  message: string
}
interface ToastPayload extends ToastMessage {
  type: ToastType
  delay?: number
}

export const Toaster = {
  info: (title: string, message: string, delay?: number) => {
    ToastEmitter.emit(SHOW_TOAST, { title, message, type: 'info', delay })
  },
  confirm: (title: string, message: string, delay?: number) => {
    ToastEmitter.emit(SHOW_TOAST, { title, message, type: 'confirm', delay })
  },
  warn: (title: string, message: string, delay?: number) => {
    ToastEmitter.emit(SHOW_TOAST, { title, message, type: 'alert', delay })
  },
  error: (title: string, message: string, delay?: number) => {
    ToastEmitter.emit(SHOW_TOAST, { title, message, type: 'error', delay })
  },
}

const Toast: React.FC<ToastProps> = props => {
  /**
   * Define state for Toast
   */
  const [animatedValue] = useState(new Animated.Value(0))
  const [type, updateType] = useState<ToastType>()
  const [visible, toggleVisibility] = useState<boolean>(false)
  const [content, updateContent] = useState<ToastMessage>({ title: '', message: '' })

  /**
   * Hide the toast after a specified time
   */
  const hideToast = (delay: number) => {
    toggleVisibility(false)

    Animated.timing(animatedValue, {
      delay,
      toValue: 0,
      duration: 200,
    }).start()
  }

  /**
   * Show toast message
   */
  const showToast = (payload: ToastPayload) => {
    if (visible) {
      return
    }
    toggleVisibility(true)
    updateType(payload.type)
    updateContent({
      title: payload.title,
      message: payload.message,
    })

    Animated.spring(animatedValue, {
      toValue: 1,
      speed: 14,
    }).start(() => hideToast(payload.delay ? payload.delay : 1100))
  }

  /**
   * Set up listener when component renders
   */
  useEffect(() => {
    ToastEmitter.addListener(SHOW_TOAST, payload => {
      showToast(payload)
    })

    // Remove event listener on cleanup
    return () => {
      ToastEmitter.removeListener(SHOW_TOAST)
    }
  }, [])

  const position = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-80, 50],
  })

  const opacity = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  })

  return (
    <Animated.View
      style={{
        transform: [{ translateY: position }],
        opacity,
        position: 'absolute',
        zIndex: 100,
        top: 0,
        left: 10,
        right: 10,
        backgroundColor: props.theme.colors.status[type ? type : props.theme.colors.status.info],
        borderRadius: 5,
      }}
    >
      <Container alignItems={'flex-start'} justifyContent={'center'} padding={10} br={5}>
        {/* <StatusBar hidden={true} /> */}
        <Text type={Constants.TextTypes.H5} textColor={'white'} bold={true}>
          {content.title}
        </Text>
        <Text textColor={'white'}>{content.message}</Text>
      </Container>
    </Animated.View>
  )
}

export default withTheme(Toast)
