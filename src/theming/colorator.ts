import defaultColors from './colors'

class Colorator {
  _colors: any

  constructor(colors: any) {
    this._colors = colors
  }

  getColors() {
    return this._colors
  }

  setColors(colors: any) {
    this._colors = colors
  }
}

export default new Colorator(defaultColors)
