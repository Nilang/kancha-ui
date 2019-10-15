import React from 'react'
import { AppRegistry, YellowBox } from 'react-native'
import Navigator from './src/navigators'
import configs from './app.json'
import { Theme } from './src/theme'
import { ThemeProvider, Toast } from '@kancha/kancha-ui'
import 'react-native-gesture-handler'

YellowBox.ignoreWarnings(['-[RCTRootView cancelTouches]` is deprecated and will be deleted soon.'])

const Wrapper = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Toast />
      <Navigator />
    </ThemeProvider>
  )
}

AppRegistry.registerComponent(configs.name, () => Wrapper)
