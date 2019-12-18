import React from 'react'
import { AppRegistry, YellowBox } from 'react-native'
import Navigator from './src/navigators'
import configs from './app.json'
import { Theme } from './src/theme'
import { ThemeProvider, Toast, OverlaySign } from '@kancha/kancha-ui'
import BottomSheet1 from './src/navigators/BottomSheet'
import 'react-native-gesture-handler'

YellowBox.ignoreWarnings(['-[RCTRootView cancelTouches]` is deprecated and will be deleted soon.'])

const Wrapper = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Toast />
      <OverlaySign />
      <Navigator />
      <BottomSheet1 id={'SHEET_1'} />
      <BottomSheet1 id={'SHEET_2'} />
      <BottomSheet1 id={'SHEET_3'} />
    </ThemeProvider>
  )
}

AppRegistry.registerComponent(configs.name, () => Wrapper)
