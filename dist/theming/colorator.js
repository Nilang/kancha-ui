import defaultColors from './colors';
class Colorator {
    constructor(colors) {
        this._colors = colors;
    }
    getColors() {
        return this._colors;
    }
    setColors(colors) {
        this._colors = colors;
    }
}
export default new Colorator(defaultColors);
