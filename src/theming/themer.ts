import defaultTheme from './theme'

class Themer {
  theme: Kancha.ThemeStatic

  constructor(theme: Kancha.ThemeStatic) {
    this.theme = theme
  }

  setTheme(theme: Kancha.ThemeStatic) {
    this.theme = theme
  }

  getTheme() {
    return this.theme
  }
}

export default new Themer(defaultTheme)
