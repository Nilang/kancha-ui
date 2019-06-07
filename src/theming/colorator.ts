import defaultColors from './colors'

class Colorator {
  private colors: any

  constructor(customColors: any) {
    this.colors = customColors
  }

  getColors() {
    return this.colors
  }

  setColors(customColors: any) {
    this.colors = customColors
  }
}

export default new Colorator(defaultColors)
