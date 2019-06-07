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
const themer = new Themer(defaultTheme);
export default themer;
