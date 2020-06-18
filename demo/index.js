import React from 'react'
import { AppRegistry, YellowBox } from 'react-native'
import Navigator from './src/navigators'
import configs from './app.json'
import { SwitchProvider } from './src/theme'
import { Toast, OverlaySign } from '@kancha/kancha-ui'
import BottomSheet1 from './src/navigators/BottomSheet'
import 'react-native-gesture-handler'

YellowBox.ignoreWarnings(['-[RCTRootView cancelTouches]` is deprecated and will be deleted soon.'])

const Wrapper = () => {
  return (
    <SwitchProvider>
      {theme => (
        <>
          <Toast />
          <OverlaySign />
          <Navigator theme={theme} />
          <BottomSheet1 id={'SHEET_1'} />
          <BottomSheet1 id={'SHEET_2'} />
          <BottomSheet1 id={'SHEET_3'} />
        </>
      )}
    </SwitchProvider>
  )
}

AppRegistry.registerComponent(configs.name, () => Wrapper)
