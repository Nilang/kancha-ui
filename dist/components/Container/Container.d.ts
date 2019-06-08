import * as React from 'react';
import { ViewStyle } from 'react-native';
import { Kancha } from '@types';
/**
 * Container is the most basic building block of Kancha. It is an abstraction of View with a basic implementaion
 * of flexbox and box modelling via props. The intention is for Container to be a declarative easy to use primitive to construct
 * complex views without worrying about the mess of styles. A custom style prop may need to be added to override styles for ege cases and or temporary implementaions.
 */
interface ContainerProps {
    /** Test ID used for e2e tests */
    testID?: string;
    /** Width */
    w?: string | number | undefined;
    /** Height */
    h?: string | number | undefined;
    /** Bottom */
    b?: string | number | undefined;
    /** Bottom */
    r?: string | number | undefined;
    /** Border radius */
    br?: number | undefined;
    /** Flex */
    flex?: number | undefined;
    /** Pre-defined backgrounds accordign to the theme. use these where possible. */
    background?: Kancha.BrandPropOptions;
    /** Temporary option to create custom color. Avoid is possible and deprecate if you can by modifying the theme */
    backgroundColor?: string;
    /** Flex direction */
    flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse' | undefined;
    /** Align items */
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline' | undefined;
    /** Justify Content */
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | undefined;
    /** Set the bottom divider */
    dividerBottom?: boolean;
    /** et the top divider */
    dividerTop?: boolean;
    /** Set the bottom margin */
    marginBottom?: number | boolean | undefined;
    /** Set the top margin */
    marginTop?: number | boolean | undefined;
    /** Set the bottom margin */
    marginLeft?: number | boolean | undefined;
    /** Set the top margin */
    marginRight?: number | boolean | undefined;
    /** Set the default padding */
    padding?: number | boolean | undefined;
    /** Set the default paddingHorizontal */
    paddingHorizontal?: number | boolean | undefined;
    /** Set the bottom padding */
    paddingBottom?: number | boolean | undefined;
    /** Set the top padding */
    paddingTop?: number | boolean | undefined;
    /** Set the left padding */
    paddingLeft?: number | boolean | undefined;
    /** Set the right padding */
    paddingRight?: number | boolean | undefined;
    /** Enable border for debugging layouts */
    debugBorder?: boolean;
    /** Enable border for debugging layouts */
    borderColor?: string;
    /** Enable border for debugging layouts */
    borderWidth?: number;
    /** Change debug border color */
    debugBorderColor?: string | undefined;
    /** Add addionaly custom styles for a container. Use sparingly!! */
    viewStyle?: ViewStyle;
    /** Disable the view from being able to detect interactions */
    disabled?: boolean;
    /** A shadow level to apply */
    shadow?: number;
    /** An opacity level. Use 1, 2, 3 etc  */
    opacity?: number;
    theme: any;
}
declare const _default: React.ComponentType<Pick<ContainerProps, "b" | "br" | "disabled" | "testID" | "flex" | "padding" | "paddingBottom" | "w" | "h" | "r" | "background" | "backgroundColor" | "flexDirection" | "alignItems" | "justifyContent" | "dividerBottom" | "dividerTop" | "marginBottom" | "marginTop" | "marginLeft" | "marginRight" | "paddingHorizontal" | "paddingTop" | "paddingLeft" | "paddingRight" | "debugBorder" | "borderColor" | "borderWidth" | "debugBorderColor" | "viewStyle" | "shadow" | "opacity"> & {
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
                }; /** Bottom */
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
                /** Flex direction */
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
                /** et the top divider */
                divider: string;
                accessories: string;
                underlay: string;
                button: string;
                buttonText: {
                    filled: string;
                    outlined: string; /** Set the bottom margin */
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
