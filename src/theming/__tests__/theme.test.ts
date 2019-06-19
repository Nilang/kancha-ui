import defaultColors from '../colors'
import { createTheme } from '../theme'
import { mergeTheme } from '..'
import merge from 'deepmerge'

describe('Theme', () => {
  const defaultTheme = {
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
        brand: '#0078ff',
        text: '#333333',
        background: '#FFFFFF',
        divider: '#CCCCCC',
        accessories: '#BBBBBB',
        underlay: '#CCCCCC',
        button: '#0078ff',
        buttonText: {
          filled: '#FFFFFF',
          outlined: '#0078ff',
          clear: '#0078ff',
        },
      },
      secondary: {
        brand: '#BBBBBB',
        text: '#BBBBBB',
        background: '#EFEEF3',
        divider: '#CCCCCC',
        accessories: '#CCCCCC',
        underlay: '#CCCCCC',
        button: '#CCCCCC',
        buttonText: {
          filled: '#FFFFFF',
          outlined: '#CCCCCC',
          clear: '#CCCCCC',
        },
      },
      tertiary: {
        brand: '#BBBBBB',
        text: '#BBBBBB',
        background: '#BBBBBB',
        divider: '#BBBBBB',
        accessories: '#BBBBBB',
        underlay: '#BBBBBB',
        button: '#BBBBBB',
        buttonText: {
          filled: '#BBBBBB',
          outlined: '#BBBBBB',
          clear: '#BBBBBB',
        },
      },
      accent: {
        brand: '#E89835',
        text: '#E89835',
        background: '#E89835',
        divider: '#E89835',
        accessories: '#E89835',
        underlay: '#E89835',
        button: '#E89835',
        buttonText: {
          filled: '#FFFFFF',
          outlined: '#E89835',
          clear: '#E89835',
        },
      },
      warning: {
        brand: '#3DCF8A',
        text: '#3DCF8A',
        background: '#3DCF8A',
        divider: '#3DCF8A',
        accessories: '#3DCF8A',
        underlay: '#3DCF8A',
        button: '#3DCF8A',
        buttonText: {
          filled: '#FFFFFF',
          outlined: '#3DCF8A',
          clear: '#3DCF8A',
        },
      },
      confirm: {
        brand: '#3DCF8A',
        text: '#3DCF8A',
        background: '#3DCF8A',
        divider: '#3DCF8A',
        accessories: '#3DCF8A',
        underlay: '#3DCF8A',
        button: '#3DCF8A',
        buttonText: {
          filled: '#FFFFFF',
          outlined: '#3DCF8A',
          clear: '#3DCF8A',
        },
      },
      inverted: {
        brand: 'transparent',
        text: '#FFFFFF',
        background: 'transparent',
        divider: '#FFFFFF',
        accessories: '#FFFFFF',
        underlay: 'transparent',
        button: '#FFFFFF',
        buttonText: {
          filled: '#0078ff',
          outlined: '#FFFFFF',
          clear: '#FFFFFF',
        },
      },
      custom: {
        brand: 'transparent',
        text: '#FFFFFF',
        background: 'transparent',
        divider: 'transparent',
        accessories: 'transparent',
        underlay: 'transparent',
        button: '#FFFFFF',
        buttonText: {
          filled: '#0078ff',
          outlined: '#FFFFFF',
          clear: '#FFFFFF',
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
    statusBarStyle: 'dark-content',
  }

  it('should return return a default theme with no args', () => {
    const theme = createTheme()
    expect(JSON.stringify(theme)).toEqual(JSON.stringify(defaultTheme))
  })

  it('should return return a default theme when passed default colors', () => {
    const theme = createTheme(defaultColors)
    expect(JSON.stringify(theme)).toEqual(JSON.stringify(defaultTheme))
  })

  it('should return return a merged theme', () => {
    const section = () => {
      return {
        spacing: {
          default: 20,
          section: 10,
        },
      }
    }
    const theme = mergeTheme(section, defaultColors)

    expect(JSON.stringify(theme)).toEqual(JSON.stringify(merge(defaultTheme, section())))
  })
})
