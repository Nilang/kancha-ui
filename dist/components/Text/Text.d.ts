import * as React from 'react';
import { TextStyle } from 'react-native';
import { Kancha } from '@types';
/**
 * Kancha Text Props
 */
export interface TextProps {
    /**
     * The type of text to display. This will be styled accordinly to the theme
     */
    type?: string;
    /**
     * Overide the color with a warning color
     */
    warn?: boolean;
    /**
     * Color prop is used to configure button text colors
     */
    buttonTextColor?: Kancha.BrandPropOptions;
    /**
     * Overide the brand color
     */
    textColor?: string;
    /**
     * Overide the color with a warning color
     */
    block?: Kancha.BlockPropsOptions;
    /**
     * Make the text bold
     */
    bold?: boolean;
    /**
     * The padding around the text
     */
    padding?: number;
    /**
     * A bottom padding for the text. Useful for headings
     */
    paddingBottom?: number | boolean | undefined;
    /**
     * The margin around the text
     */
    margin?: number;
    /**
     * The margin around the text
     */
    textAlign?: string;
    /**
     * Decoration for button text
     */
    textDecorationLine?: 'none' | 'underline' | 'line-through' | 'underline line-through' | undefined;
    /**
     * Transform the text
     */
    transform?: 'uppercase' | 'lowercase' | undefined;
    /**
     * Transform the text
     */
    textStyle?: TextStyle;
    /**
     * Transform the text
     */
    theme: any;
}
declare const _default: React.ComponentType<Pick<TextProps, "type" | "warn" | "buttonTextColor" | "textColor" | "block" | "bold" | "padding" | "paddingBottom" | "margin" | "textAlign" | "textDecorationLine" | "transform" | "textStyle"> & {
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
                /**
                 * The margin around the text
                 */
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
}>;
export default _default;
