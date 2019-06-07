import defaultColors from './colors';
class Colorator {
    constructor(customColors) {
        this.colors = customColors;
    }
    getColors() {
        return this.colors;
    }
    setColors(customColors) {
        this.colors = customColors;
    }
}
export default new Colorator(defaultColors);
