import Colorator from './colorator'

/**
 * Get colors that have been set
 */
const COLORS = Colorator.getColors()

export default {
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
      brand: COLORS.BRAND,
      text: COLORS.CHARCOAL,
      background: COLORS.WHITE,
      divider: COLORS.MEDIUM_GREY,
      accessories: COLORS.LIGHT_GREY,
      underlay: COLORS.MEDIUM_GREY,
      button: COLORS.BRAND,
      buttonText: {
        filled: COLORS.WHITE,
        outlined: COLORS.BRAND,
        clear: COLORS.BRAND,
      },
    },
    secondary: {
      brand: COLORS.LIGHT_GREY,
      text: COLORS.LIGHT_GREY,
      background: COLORS.LIGHTEST_GREY,
      divider: COLORS.MEDIUM_GREY,
      accessories: COLORS.MEDIUM_GREY,
      underlay: COLORS.MEDIUM_GREY,
      button: COLORS.MEDIUM_GREY,
      buttonText: {
        filled: COLORS.WHITE,
        outlined: COLORS.MEDIUM_GREY,
        clear: COLORS.MEDIUM_GREY,
      },
    },
    tertiary: {
      brand: COLORS.LIGHT_GREY,
      text: COLORS.LIGHT_GREY,
      background: COLORS.LIGHT_GREY,
      divider: COLORS.LIGHT_GREY,
      accessories: COLORS.LIGHT_GREY,
      underlay: COLORS.LIGHT_GREY,
      button: COLORS.LIGHT_GREY,
      buttonText: {
        filled: COLORS.LIGHT_GREY,
        outlined: COLORS.LIGHT_GREY,
        clear: COLORS.LIGHT_GREY,
      },
    },
    accent: {
      brand: COLORS.SUNNY_ORANGE,
      text: COLORS.SUNNY_ORANGE,
      background: COLORS.SUNNY_ORANGE,
      divider: COLORS.SUNNY_ORANGE,
      accessories: COLORS.SUNNY_ORANGE,
      underlay: COLORS.SUNNY_ORANGE,
      button: COLORS.SUNNY_ORANGE,
      buttonText: {
        filled: COLORS.WHITE,
        outlined: COLORS.SUNNY_ORANGE,
        clear: COLORS.SUNNY_ORANGE,
      },
    },
    warning: {
      brand: COLORS.CRIMSON_RED,
      text: COLORS.CRIMSON_RED,
      background: COLORS.CRIMSON_RED,
      divider: COLORS.CRIMSON_RED,
      accessories: COLORS.CRIMSON_RED,
      underlay: COLORS.CRIMSON_RED,
      button: COLORS.CRIMSON_RED,
      buttonText: {
        filled: COLORS.WHITE,
        outlined: COLORS.CRIMSON_RED,
        clear: COLORS.CRIMSON_RED,
      },
    },
    confirm: {
      brand: COLORS.WASHED_GREEN,
      text: COLORS.WASHED_GREEN,
      background: COLORS.WASHED_GREEN,
      divider: COLORS.WASHED_GREEN,
      accessories: COLORS.WASHED_GREEN,
      underlay: COLORS.WASHED_GREEN,
      button: COLORS.WASHED_GREEN,
      buttonText: {
        filled: COLORS.WHITE,
        outlined: COLORS.WASHED_GREEN,
        clear: COLORS.WASHED_GREEN,
      },
    },
    inverted: {
      brand: COLORS.TRANSPARENT,
      text: COLORS.WHITE,
      background: COLORS.TRANSPARENT,
      divider: COLORS.WHITE,
      accessories: COLORS.WHITE,
      underlay: COLORS.TRANSPARENT,
      button: COLORS.WHITE,
      buttonText: {
        filled: COLORS.BRAND,
        outlined: COLORS.WHITE,
        clear: COLORS.WHITE,
      },
    },
    custom: {
      brand: COLORS.TRANSPARENT,
      text: COLORS.WHITE,
      background: COLORS.TRANSPARENT,
      divider: COLORS.TRANSPARENT,
      accessories: COLORS.TRANSPARENT,
      underlay: COLORS.TRANSPARENT,
      button: COLORS.WHITE,
      buttonText: {
        filled: COLORS.BRAND,
        outlined: COLORS.WHITE,
        clear: COLORS.WHITE,
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
