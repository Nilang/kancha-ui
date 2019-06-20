import React from 'react'
import { AppRegistry } from 'react-native'
import App from './src/screens/App'
import configs from './app.json'
import { Theme } from './src/theme'
import { ThemeProvider } from '@kancha/kancha-ui'

const Wrapper = () => {
  return (
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  )
}

AppRegistry.registerComponent(configs.name, () => Wrapper)
