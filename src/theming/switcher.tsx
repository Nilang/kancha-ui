import React, { useState, createContext } from 'react'

import { createTheming } from '@callstack/react-theme-provider'

interface ThemeState {
  current: string
}

export const SwitchContext = createContext<ThemeState | any>({})

export const SwitchProvider = ({ children, lightTheme, darkTheme }: any) => {
  const [currentTheme, setTheme] = useState(lightTheme)
  const { ThemeProvider, withTheme, useTheme } = createTheming(currentTheme)

  const switchTheme = (t: string) => {
    setTheme(t === 'light' ? lightTheme : darkTheme)
  }

  return (
    <SwitchContext.Provider value={{ switchTheme, withTheme, useTheme }}>
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </SwitchContext.Provider>
  )
}
