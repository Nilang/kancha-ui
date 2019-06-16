// import { ThemeStatic } from '../types'
import DEFAULT_COLORS from './colors'

export const createTheme = (customColors?: { [index: string]: string }) => {
  const colors = customColors ? customColors : DEFAULT_COLORS
  return {
    text: {
      lineHeights: {
        body: 22,
      },
      sizes: {
        h1: 32,
        h2: 24,
        h3: 20,
        h4: 18,
        h5: 16,
        h6: 14,
        subTitle: 14,
        listItem: 18,
        listItemRight: 18,
        listItemNote: 15,
        sectionHeader: 14,
        summary: 18,
        body: 16,
        button: 18,
        navButton: 20,
      },
    },
    colors: {
      primary: {
        brand: colors.BRAND,
        text: colors.CHARCOAL,
        background: colors.WHITE,
        divider: colors.MEDIUM_GREY,
        accessories: colors.LIGHT_GREY,
        underlay: colors.MEDIUM_GREY,
        button: colors.BRAND,
        buttonText: {
          filled: colors.WHITE,
          outlined: colors.BRAND,
          clear: colors.BRAND,
        },
      },
      secondary: {
        brand: colors.LIGHT_GREY,
        text: colors.LIGHT_GREY,
        background: colors.LIGHTEST_GREY,
        divider: colors.MEDIUM_GREY,
        accessories: colors.MEDIUM_GREY,
        underlay: colors.MEDIUM_GREY,
        button: colors.MEDIUM_GREY,
        buttonText: {
          filled: colors.WHITE,
          outlined: colors.MEDIUM_GREY,
          clear: colors.MEDIUM_GREY,
        },
      },
      tertiary: {
        brand: colors.LIGHT_GREY,
        text: colors.LIGHT_GREY,
        background: colors.LIGHT_GREY,
        divider: colors.LIGHT_GREY,
        accessories: colors.LIGHT_GREY,
        underlay: colors.LIGHT_GREY,
        button: colors.LIGHT_GREY,
        buttonText: {
          filled: colors.LIGHT_GREY,
          outlined: colors.LIGHT_GREY,
          clear: colors.LIGHT_GREY,
        },
      },
      accent: {
        brand: colors.ACCENT,
        text: colors.ACCENT,
        background: colors.ACCENT,
        divider: colors.ACCENT,
        accessories: colors.ACCENT,
        underlay: colors.ACCENT,
        button: colors.ACCENT,
        buttonText: {
          filled: colors.WHITE,
          outlined: colors.ACCENT,
          clear: colors.ACCENT,
        },
      },
      warning: {
        brand: colors.WARN,
        text: colors.WARN,
        background: colors.WARN,
        divider: colors.WARN,
        accessories: colors.WARN,
        underlay: colors.WARN,
        button: colors.WARN,
        buttonText: {
          filled: colors.WHITE,
          outlined: colors.WARN,
          clear: colors.WARN,
        },
      },
      confirm: {
        brand: colors.CONFIRM,
        text: colors.CONFIRM,
        background: colors.CONFIRM,
        divider: colors.CONFIRM,
        accessories: colors.CONFIRM,
        underlay: colors.CONFIRM,
        button: colors.CONFIRM,
        buttonText: {
          filled: colors.WHITE,
          outlined: colors.CONFIRM,
          clear: colors.CONFIRM,
        },
      },
      inverted: {
        brand: colors.TRANSPARENT,
        text: colors.WHITE,
        background: colors.TRANSPARENT,
        divider: colors.WHITE,
        accessories: colors.WHITE,
        underlay: colors.TRANSPARENT,
        button: colors.WHITE,
        buttonText: {
          filled: colors.BRAND,
          outlined: colors.WHITE,
          clear: colors.WHITE,
        },
      },
      custom: {
        brand: colors.TRANSPARENT,
        text: colors.WHITE,
        background: colors.TRANSPARENT,
        divider: colors.TRANSPARENT,
        accessories: colors.TRANSPARENT,
        underlay: colors.TRANSPARENT,
        button: colors.WHITE,
        buttonText: {
          filled: colors.BRAND,
          outlined: colors.WHITE,
          clear: colors.WHITE,
        },
      },
    },
    spacing: {
      default: 15,
      section: 20,
    },
    roundedCorners: {
      buttons: 8,
      cards: 5,
      textInputs: 8,
    },
  }
}

// export const mergeTheme = (newTheme: ThemeStatic) => {
//   console.log(newTheme)
// }
