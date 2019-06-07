declare class Themer {
    theme: Kancha.ThemeStatic;
    constructor(theme: Kancha.ThemeStatic);
    setTheme(theme: Kancha.ThemeStatic): void;
    getTheme(): Kancha.ThemeStatic;
}
declare const themer: Themer;
export default themer;
