/**
 * Components
 */

import Container from './components/Container/Container'
import Text, { TextTypes } from './components/Text/Text'
import Button, { ButtonBlocks } from './components/Button/Button'

import { BrandOptions } from './constants'

const Constants = {
  ButtonBlocks,
  BrandOptions,
  TextTypes,
}

export { Container, Button, Text, Constants }

/**
 * Theming provider by @callstack/react-theme-provider
 */
export { ThemeProvider, withTheme, useTheme } from './theming/index'
