import React from 'react'
import { AppRegistry } from 'react-native'
import Navigator from './src/navigators'
import { NavigationActions } from 'react-navigation'
import configs from './app.json'
import { Theme } from './src/theme'
import { ThemeProvider } from '@kancha/kancha-ui'

const Wrapper = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Navigator />
    </ThemeProvider>
  )
}

AppRegistry.registerComponent(configs.name, () => Wrapper)
