import * as React from 'react'
import { ImageSourcePropType, SafeAreaView, StatusBar, ImageBackground } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import Container from '../Container/Container'
import { withTheme } from '../../theming'

interface ScreenProps {
  /**
   * Safe area for entire View. This will over-ride other safearea options
   */
  safeArea?: boolean

  /**
   * Safe background color. This will over-ride other safearea background color options
   */
  safeAreaBackground?: string

  /**
   * Safearea top
   */
  safeAreaTop?: boolean

  /**
   * Safearea top background color
   */
  safeAreaTopBackground?: string

  /**
   * Safearea bottom
   */
  safeAreaBottom?: boolean

  /**
   * Safearea bottom background color
   */
  safeAreaBottomBackground?: string

  /**
   * Enable scrolling view
   */
  scrollEnabled?: boolean

  /**
   * Provide a banner component for the view
   */
  bannerComponent?: React.ReactNode

  /**
   * Set a background image for the view
   */
  backgroundImage?: ImageSourcePropType

  /**
   * Hide the status bar
   */
  statusBarHidden?: boolean

  /**
   * Set the statusbar style. Override the theme's default
   */
  statusBarStyle?: string

  /**
   * Provide a footer component
   */
  footerComponent?: React.ReactNode

  /**
   * Show a divider line between footer component and view
   */
  footerDivider?: boolean

  /**
   * Passed in by the HOC. Safe to ignore.
   */
  theme: any
}

/**
 * Screen component provides useful UI helpers that are needed on most screens.
 */
const Screen: React.FC<ScreenProps> = props => {
  const mainContent = (
    <React.Fragment>
      {!props.statusBarHidden && (
        <StatusBar barStyle={props.statusBarStyle ? props.statusBarStyle : props.theme.statusBarStyle} />
      )}
      <Container flex={1}>{props.children}</Container>
    </React.Fragment>
  )
  const scrollViewContent = <KeyboardAwareScrollView>{mainContent}</KeyboardAwareScrollView>
  const scrollSafeViews = (
    <React.Fragment>
      {(props.safeArea || props.safeAreaTop) && (
        <SafeAreaView style={{ backgroundColor: props.safeAreaBackground || props.safeAreaTopBackground }} />
      )}
      {props.scrollEnabled ? scrollViewContent : mainContent}
      {props.footerComponent && (
        <Container paddingTop={true} dividerTop={props.footerDivider}>
          {props.footerComponent}
        </Container>
      )}
      {(props.safeArea || props.safeAreaBottom) && (
        <SafeAreaView
          style={{ backgroundColor: props.safeAreaBackground || props.safeAreaBottomBackground }}
        />
      )}
    </React.Fragment>
  )
  const backgroundImage = (
    <ImageBackground
      style={{ flex: 1 }}
      source={props.backgroundImage ? props.backgroundImage : {}}
      resizeMode={'cover'}
    >
      {scrollSafeViews}
    </ImageBackground>
  )

  return props.backgroundImage ? backgroundImage : scrollSafeViews
}

export default withTheme(Screen)
