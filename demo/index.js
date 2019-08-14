import React from 'react'
import { AppRegistry } from 'react-native'
import Navigator from './src/navigators'
import configs from './app.json'
import { Theme } from './src/theme'
import { ThemeProvider, Toast } from '@kancha/kancha-ui'

const Wrapper = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Toast />
      <Navigator />
    </ThemeProvider>
  )
}

AppRegistry.registerComponent(configs.name, () => Wrapper)
