import DEFAULT_COLORS from './colors'
import merge from 'deepmerge'

/**
 *  Create theme allows you to pass custom colors to the theme file.
 *  The existing color keys need to be used with with `createTheme`.
 *
 *  If you are using a color object with custom key names you should use mergeTheme and overwrite all
 *  color references
 *
 *  ```jsx
 *  export default createTheme(CUSTOM_COLORS)
 * ```
 */
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
      status: {
        warn: colors.ACCENT,
        info: colors.BRAND,
        confirm: colors.CONFIRM,
        error: colors.WARN,
      },
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
      toasts: 5,
    },
    delays: {
      toasts: 1200,
    },
    icons: {
      EDIT: {
        name: 'ios-create',
        iconFamily: 'Ionicons',
      },
      CHECKED: {
        name: 'ios-checkmark-circle',
        iconFamily: 'Ionicons',
      },
      FORWARD: {
        name: 'ios-arrow-forward',
        iconFamily: 'Ionicons',
      },
      LINK: {
        name: 'ios-open',
        iconFamily: 'Ionicons',
      },
      CLOSE: {
        name: 'ios-close',
        iconFamily: 'Ionicons',
      },
      SUCCESS: {
        name: 'ios-checkmark-circle-outline',
        iconFamily: 'Ionicons',
      },
      CONFIRM: {
        name: 'ios-checkmark-circle-outline',
        iconFamily: 'Ionicons',
      },
      ERROR: {
        name: 'ios-warning',
        iconFamily: 'Ionicons',
      },
      INFO: {
        name: 'ios-information-circle-outline',
        iconFamily: 'Ionicons',
      },
      WARN: {
        name: 'ios-warning',
        iconFamily: 'Ionicons',
      },
      DOWN: {
        name: 'ios-arrow-down',
        iconFamily: 'Ionicons',
      },
      UP: {
        name: 'ios-arrow-up',
        iconFamily: 'Ionicons',
      },
    },
    statusBarStyle: 'dark-content',
  }
}

/**
 *  A theme section can be merged with the default theme to create variations.
 *  If you use colors in your section you can pass in your custom color object
 *  ```jsx
 *  const themeSection = (colors) => {
 *    return {
 *      roundedCorners: {
 *        buttons: 5,
 *      },
 *      someCustomElement: {
 *        borderColor: colors.MY_CUSTOM_COLOR
 *      }
 *    }
 *  }
 *  export default mergeTheme(themeSection, CUSTOM_COLORS)
 * ```
 */
export const mergeTheme = (
  themeSection: (colors?: any) => any,
  customColors?: { [index: string]: string },
) => {
  const defaultTheme = createTheme(customColors && customColors)
  const section = themeSection(customColors && customColors)

  return merge(defaultTheme, section)
}
