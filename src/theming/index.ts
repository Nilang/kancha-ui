import { createTheming } from '@callstack/react-theme-provider'
import { createTheme } from './theme'

const { ThemeProvider, withTheme, useTheme } = createTheming(createTheme())

export { ThemeProvider, withTheme, useTheme, createTheme }
