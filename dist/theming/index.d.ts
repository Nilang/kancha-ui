/// <reference types="react" />
declare const ThemeProvider: import("react").ComponentType<{
    theme?: {
        text: {
            lineHeights: {
                body: number;
            };
            sizes: {
                h1: number;
                h2: number;
                h3: number;
                h4: number;
                h5: number;
                h6: number;
                subTitle: number;
                listItem: number;
                listItemRight: number;
                listItemNote: number;
                sectionHeader: number;
                summary: number;
                body: number;
                button: number;
                navButton: number;
            };
        };
        colors: {
            primary: {
                brand: string;
                text: string;
                background: string;
                divider: string;
                accessories: string;
                underlay: string;
                button: string;
                buttonText: {
                    filled: string;
                    outlined: string;
                    clear: string;
                };
            };
            secondary: {
                brand: string;
                text: string;
                background: string;
                divider: string;
                accessories: string;
                underlay: string;
                button: string;
                buttonText: {
                    filled: string;
                    outlined: string;
                    clear: string;
                };
            };
            tertiary: {
                brand: string;
                text: string;
                background: string;
                divider: string;
                accessories: string;
                underlay: string;
                button: string;
                buttonText: {
                    filled: string;
                    outlined: string;
                    clear: string;
                };
            };
            accent: {
                brand: string;
                text: string;
                background: string;
                divider: string;
                accessories: string;
                underlay: string;
                button: string;
                buttonText: {
                    filled: string;
                    outlined: string;
                    clear: string;
                };
            };
            warning: {
                brand: string;
                text: string;
                background: string;
                divider: string;
                accessories: string;
                underlay: string;
                button: string;
                buttonText: {
                    filled: string;
                    outlined: string;
                    clear: string;
                };
            };
            confirm: {
                brand: string;
                text: string;
                background: string;
                divider: string;
                accessories: string;
                underlay: string;
                button: string;
                buttonText: {
                    filled: string;
                    outlined: string;
                    clear: string;
                };
            };
            inverted: {
                brand: string;
                text: string;
                background: string;
                divider: string;
                accessories: string;
                underlay: string;
                button: string;
                buttonText: {
                    filled: string;
                    outlined: string;
                    clear: string;
                };
            };
            custom: {
                brand: string;
                text: string;
                background: string;
                divider: string;
                accessories: string;
                underlay: string;
                button: string;
                buttonText: {
                    filled: string;
                    outlined: string;
                    clear: string;
                };
            };
        };
        spacing: {
            default: number;
            section: number;
        };
        roundedCorners: {
            buttons: number;
            cards: number;
            textInputs: number;
        };
    } | undefined;
}>, withTheme: <Props extends {
    theme: {
        text: {
            lineHeights: {
                body: number;
            };
            sizes: {
                h1: number;
                h2: number;
                h3: number;
                h4: number;
                h5: number;
                h6: number;
                subTitle: number;
                listItem: number;
                listItemRight: number;
                listItemNote: number;
                sectionHeader: number;
                summary: number;
                body: number;
                button: number;
                navButton: number;
            };
        };
        colors: {
            primary: {
                brand: string;
                text: string;
                background: string;
                divider: string;
                accessories: string;
                underlay: string;
                button: string;
                buttonText: {
                    filled: string;
                    outlined: string;
                    clear: string;
                };
            };
            secondary: {
                brand: string;
                text: string;
                background: string;
                divider: string;
                accessories: string;
                underlay: string;
                button: string;
                buttonText: {
                    filled: string;
                    outlined: string;
                    clear: string;
                };
            };
            tertiary: {
                brand: string;
                text: string;
                background: string;
                divider: string;
                accessories: string;
                underlay: string;
                button: string;
                buttonText: {
                    filled: string;
                    outlined: string;
                    clear: string;
                };
            };
            accent: {
                brand: string;
                text: string;
                background: string;
                divider: string;
                accessories: string;
                underlay: string;
                button: string;
                buttonText: {
                    filled: string;
                    outlined: string;
                    clear: string;
                };
            };
            warning: {
                brand: string;
                text: string;
                background: string;
                divider: string;
                accessories: string;
                underlay: string;
                button: string;
                buttonText: {
                    filled: string;
                    outlined: string;
                    clear: string;
                };
            };
            confirm: {
                brand: string;
                text: string;
                background: string;
                divider: string;
                accessories: string;
                underlay: string;
                button: string;
                buttonText: {
                    filled: string;
                    outlined: string;
                    clear: string;
                };
            };
            inverted: {
                brand: string;
                text: string;
                background: string;
                divider: string;
                accessories: string;
                underlay: string;
                button: string;
                buttonText: {
                    filled: string;
                    outlined: string;
                    clear: string;
                };
            };
            custom: {
                brand: string;
                text: string;
                background: string;
                divider: string;
                accessories: string;
                underlay: string;
                button: string;
                buttonText: {
                    filled: string;
                    outlined: string;
                    clear: string;
                };
            };
        };
        spacing: {
            default: number;
            section: number;
        };
        roundedCorners: {
            buttons: number;
            cards: number;
            textInputs: number;
        };
    };
}>(Comp: import("react").ComponentType<Props>) => import("react").ComponentType<Pick<Props, Exclude<keyof Props, "theme">> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<{
        text: {
            lineHeights: {
                body: number;
            };
            sizes: {
                h1: number;
                h2: number;
                h3: number;
                h4: number;
                h5: number;
                h6: number;
                subTitle: number;
                listItem: number;
                listItemRight: number;
                listItemNote: number;
                sectionHeader: number;
                summary: number;
                body: number;
                button: number;
                navButton: number;
            };
        };
        colors: {
            primary: {
                brand: string;
                text: string;
                background: string;
                divider: string;
                accessories: string;
                underlay: string;
                button: string;
                buttonText: {
                    filled: string;
                    outlined: string;
                    clear: string;
                };
            };
            secondary: {
                brand: string;
                text: string;
                background: string;
                divider: string;
                accessories: string;
                underlay: string;
                button: string;
                buttonText: {
                    filled: string;
                    outlined: string;
                    clear: string;
                };
            };
            tertiary: {
                brand: string;
                text: string;
                background: string;
                divider: string;
                accessories: string;
                underlay: string;
                button: string;
                buttonText: {
                    filled: string;
                    outlined: string;
                    clear: string;
                };
            };
            accent: {
                brand: string;
                text: string;
                background: string;
                divider: string;
                accessories: string;
                underlay: string;
                button: string;
                buttonText: {
                    filled: string;
                    outlined: string;
                    clear: string;
                };
            };
            warning: {
                brand: string;
                text: string;
                background: string;
                divider: string;
                accessories: string;
                underlay: string;
                button: string;
                buttonText: {
                    filled: string;
                    outlined: string;
                    clear: string;
                };
            };
            confirm: {
                brand: string;
                text: string;
                background: string;
                divider: string;
                accessories: string;
                underlay: string;
                button: string;
                buttonText: {
                    filled: string;
                    outlined: string;
                    clear: string;
                };
            };
            inverted: {
                brand: string;
                text: string;
                background: string;
                divider: string;
                accessories: string;
                underlay: string;
                button: string;
                buttonText: {
                    filled: string;
                    outlined: string;
                    clear: string;
                };
            };
            custom: {
                brand: string;
                text: string;
                background: string;
                divider: string;
                accessories: string;
                underlay: string;
                button: string;
                buttonText: {
                    filled: string;
                    outlined: string;
                    clear: string;
                };
            };
        };
        spacing: {
            default: number;
            section: number;
        };
        roundedCorners: {
            buttons: number;
            cards: number;
            textInputs: number;
        };
    }> | undefined;
}>, useTheme: (overrides?: import("@callstack/react-theme-provider").$DeepPartial<{
    text: {
        lineHeights: {
            body: number;
        };
        sizes: {
            h1: number;
            h2: number;
            h3: number;
            h4: number;
            h5: number;
            h6: number;
            subTitle: number;
            listItem: number;
            listItemRight: number;
            listItemNote: number;
            sectionHeader: number;
            summary: number;
            body: number;
            button: number;
            navButton: number;
        };
    };
    colors: {
        primary: {
            brand: string;
            text: string;
            background: string;
            divider: string;
            accessories: string;
            underlay: string;
            button: string;
            buttonText: {
                filled: string;
                outlined: string;
                clear: string;
            };
        };
        secondary: {
            brand: string;
            text: string;
            background: string;
            divider: string;
            accessories: string;
            underlay: string;
            button: string;
            buttonText: {
                filled: string;
                outlined: string;
                clear: string;
            };
        };
        tertiary: {
            brand: string;
            text: string;
            background: string;
            divider: string;
            accessories: string;
            underlay: string;
            button: string;
            buttonText: {
                filled: string;
                outlined: string;
                clear: string;
            };
        };
        accent: {
            brand: string;
            text: string;
            background: string;
            divider: string;
            accessories: string;
            underlay: string;
            button: string;
            buttonText: {
                filled: string;
                outlined: string;
                clear: string;
            };
        };
        warning: {
            brand: string;
            text: string;
            background: string;
            divider: string;
            accessories: string;
            underlay: string;
            button: string;
            buttonText: {
                filled: string;
                outlined: string;
                clear: string;
            };
        };
        confirm: {
            brand: string;
            text: string;
            background: string;
            divider: string;
            accessories: string;
            underlay: string;
            button: string;
            buttonText: {
                filled: string;
                outlined: string;
                clear: string;
            };
        };
        inverted: {
            brand: string;
            text: string;
            background: string;
            divider: string;
            accessories: string;
            underlay: string;
            button: string;
            buttonText: {
                filled: string;
                outlined: string;
                clear: string;
            };
        };
        custom: {
            brand: string;
            text: string;
            background: string;
            divider: string;
            accessories: string;
            underlay: string;
            button: string;
            buttonText: {
                filled: string;
                outlined: string;
                clear: string;
            };
        };
    };
    spacing: {
        default: number;
        section: number;
    };
    roundedCorners: {
        buttons: number;
        cards: number;
        textInputs: number;
    };
}> | undefined) => {
    text: {
        lineHeights: {
            body: number;
        };
        sizes: {
            h1: number;
            h2: number;
            h3: number;
            h4: number;
            h5: number;
            h6: number;
            subTitle: number;
            listItem: number;
            listItemRight: number;
            listItemNote: number;
            sectionHeader: number;
            summary: number;
            body: number;
            button: number;
            navButton: number;
        };
    };
    colors: {
        primary: {
            brand: string;
            text: string;
            background: string;
            divider: string;
            accessories: string;
            underlay: string;
            button: string;
            buttonText: {
                filled: string;
                outlined: string;
                clear: string;
            };
        };
        secondary: {
            brand: string;
            text: string;
            background: string;
            divider: string;
            accessories: string;
            underlay: string;
            button: string;
            buttonText: {
                filled: string;
                outlined: string;
                clear: string;
            };
        };
        tertiary: {
            brand: string;
            text: string;
            background: string;
            divider: string;
            accessories: string;
            underlay: string;
            button: string;
            buttonText: {
                filled: string;
                outlined: string;
                clear: string;
            };
        };
        accent: {
            brand: string;
            text: string;
            background: string;
            divider: string;
            accessories: string;
            underlay: string;
            button: string;
            buttonText: {
                filled: string;
                outlined: string;
                clear: string;
            };
        };
        warning: {
            brand: string;
            text: string;
            background: string;
            divider: string;
            accessories: string;
            underlay: string;
            button: string;
            buttonText: {
                filled: string;
                outlined: string;
                clear: string;
            };
        };
        confirm: {
            brand: string;
            text: string;
            background: string;
            divider: string;
            accessories: string;
            underlay: string;
            button: string;
            buttonText: {
                filled: string;
                outlined: string;
                clear: string;
            };
        };
        inverted: {
            brand: string;
            text: string;
            background: string;
            divider: string;
            accessories: string;
            underlay: string;
            button: string;
            buttonText: {
                filled: string;
                outlined: string;
                clear: string;
            };
        };
        custom: {
            brand: string;
            text: string;
            background: string;
            divider: string;
            accessories: string;
            underlay: string;
            button: string;
            buttonText: {
                filled: string;
                outlined: string;
                clear: string;
            };
        };
    };
    spacing: {
        default: number;
        section: number;
    };
    roundedCorners: {
        buttons: number;
        cards: number;
        textInputs: number;
    };
};
export { ThemeProvider, withTheme, useTheme };
