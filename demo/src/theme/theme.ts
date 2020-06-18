import { createTheme } from '@kancha/kancha-ui'
import CUSTOM_COLORS from './colors'

/**
 *  Modify the dar theme with more rounded buttons and a custom element
 */
const darkThemeSection = (colors: any) => {
  return {
    roundedCorners: {
      buttons: 20,
    },
    someCustomElement: {
      borderColor: colors.MY_CUSTOM_COLOR,
    },
  }
}
export default (theme: string) => createTheme(theme, CUSTOM_COLORS, null, darkThemeSection)
