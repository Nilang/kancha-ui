import { createTheming } from '@callstack/react-theme-provider'
import { createTheme, mergeTheme } from './theme'

const { ThemeProvider, withTheme, useTheme } = createTheming(createTheme('light'))

export { ThemeProvider, withTheme, useTheme, createTheme, mergeTheme }
