import { ImageSourcePropType } from 'react-native'

export interface NavigationScreen {
  componentId: string
}

export interface TextDefaultThemeMapTypes {
  [index: string]: any
}

export interface TextTypesStatic {
  H1: 'h1'
  H2: 'h2'
  H3: 'h3'
  H4: 'h4'
  H5: 'h5'
  ListItem: 'listItem'
  ListItemRight: 'listItemRight'
  ListItemNote: 'listItemNote'
  SubTitle: 'subTitle'
  ActivityTitle: 'activityTitle'
  ActivitySubTitle: 'activitySubTitle'
  Body: 'body'
  Button: 'button'
  ButtonSmall: 'buttonSmall'
  NavButton: 'navButton'
  Summary: 'summary'
  SectionHeader: 'sectionHeader'
}

export interface BrandTypeStatic {
  Primary: 'primary'
  Secondary: 'secondary'
  Tertiary: 'tertiary'
  Accent: 'accent'
  Warning?: 'warning'
  Confirm?: 'confirm'
  Custom?: 'custom'
}

export type BrandPropOptions =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'accent'
  | 'warning'
  | 'confirm'
  | 'custom'
  | undefined
export type BlockPropsOptions = 'outlined' | 'filled' | 'clear' | undefined

export interface ScreenConfigsStatic {
  SafeScroll: 'safeScroll'
  SafeNoScroll: 'safeNoScroll'
  Scroll: 'scroll'
  NoScroll: 'noScroll'
  NoSafeNoScroll: 'noSafeNoScroll'
}

export interface BlocksStatic {
  Outlined: 'outlined'
  Filled: 'filled'
  Clear: 'clear'
}

export interface ThemeStatic {
  text: {
    lineHeights: {
      body: number
    }
    sizes: {
      h1: number
      h2: number
      h3: number
      h4: number
      h5: number
      h6: number
      subTitle: number
      activityTitle: number
      activitySubTitle: number
      listItem: number
      listItemRight: number
      listItemNote: number
      sectionHeader: number
      summary: number
      body: number
      button: number
      buttonSmall: number
      navButton: number
    }
  }
  colors: {
    [index: string]: {
      brand: string
      text: string
      background: string
      divider: string
      accessories: string
      underlay: string
      button: string
      buttonText: {
        filled: string
        outlined: string
        clear: string
      }
    }
  }
  spacing: {
    default: number
    section: number
  }
  roundedCorners: {
    buttons: number
    cards: number
    textInputs: number
  }
  icons: {
    [index: string]: {
      name: string
      iconFamily: string
    }
  }
  statusBarStyle: string
}

export interface Identity {
  name: string
  did: string
  avatar: ImageSourcePropType
}

export interface VerifiableCredential {
  claim: any
  iss?: string
  sub?: string
  type?: string
  iat: number
  exp?: number
  revoked?: boolean
  vc?: string[] | string
}

export interface ClaimTreeNormalised {
  level: number
  key: string
  keyName: string
  title: string
  hasChildren: boolean
  isListItem: boolean
  value: any
}

export interface RequestItemSelectable {
  /**
   *  A unique identifier
   */
  id: string
  /**
   *  This will need to be any type eg address may have sub keys
   */
  iss: string
  /**
   *  This will need to be any type eg address may have sub keys
   */
  property: string
  /**
   *  This will need to be any type eg address may have sub keys
   */
  value: string

  /**
   *  Item is selected for sharing
   */
  selected: boolean
}
