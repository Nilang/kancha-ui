import defaultTheme from './theme';
class Themer {
    constructor(theme) {
        this.theme = theme;
    }
    setTheme(theme) {
        this.theme = theme;
    }
    getTheme() {
        return this.theme;
    }
}
export default new Themer(defaultTheme);
