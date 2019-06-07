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

const themer = new Themer(defaultTheme)

export default themer
