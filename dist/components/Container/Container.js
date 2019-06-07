import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { withTheme } from '../../theming';
const Container = props => {
    const DividerBottomStyles = {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: props.theme.colors.primary.divider,
    };
    const DividerTopStyles = {
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: props.theme.colors.primary.divider,
    };
    const BaseStyles = {
        /** Basic view styles */
        width: props.w,
        height: props.h,
        flex: props.flex,
        flexDirection: props.flexDirection,
        alignItems: props.alignItems,
        justifyContent: props.justifyContent,
        backgroundColor: props.background && props.theme.colors[props.background].background,
        borderRadius: props.br,
    };
    /** Conditionally spread props down to the View as styles */
    const styles = {
        ...BaseStyles,
        ...(props.dividerBottom ? DividerBottomStyles : {}),
        ...(props.dividerTop ? DividerTopStyles : {}),
        ...(props.borderColor ? { borderColor: props.borderColor } : {}),
        ...(props.borderWidth ? { borderWidth: props.borderWidth } : {}),
        ...(props.backgroundColor ? { backgroundColor: props.backgroundColor } : {}),
        ...(props.debugBorder ? { borderWidth: 1, borderColor: 'red' } : {}),
        ...(props.b !== undefined ? { position: 'absolute', bottom: props.b, width: '100%' } : {}),
        ...(props.r !== undefined ? { position: 'absolute', bottom: props.r, width: '100%' } : {}),
        ...(props.disabled ? { opacity: 0.5 } : {}),
        ...(props.shadow
            ? {
                shadowColor: '#ffffff',
                shadowOpacity: 0.2,
                shadowRadius: props.shadow * 5,
                backgroundColor: props.backgroundColor
                    ? props.background && props.theme.colors[props.background].background
                    : '#ffffff',
            }
            : {}),
        /** Margins */
        marginBottom: typeof props.marginBottom === 'boolean' ? props.theme.spacing.default : props.marginBottom,
        marginTop: typeof props.marginTop === 'boolean' ? props.theme.spacing.default : props.marginTop,
        marginLeft: typeof props.marginLeft === 'boolean' ? props.theme.spacing.default : props.marginLeft,
        marginRight: typeof props.marginRight === 'boolean' ? props.theme.spacing.default : props.marginRight,
        /** Paddings */
        padding: typeof props.padding === 'boolean' ? props.theme.spacing.default : props.padding,
        paddingHorizontal: typeof props.paddingHorizontal === 'boolean' ? props.theme.spacing.default : props.paddingHorizontal,
        paddingBottom: typeof props.paddingBottom === 'boolean' ? props.theme.spacing.default : props.paddingBottom,
        paddingTop: typeof props.paddingTop === 'boolean' ? props.theme.spacing.default : props.paddingTop,
        paddingLeft: typeof props.paddingLeft === 'boolean' ? props.theme.spacing.default : props.paddingLeft,
        paddingRight: typeof props.paddingRight === 'boolean' ? props.theme.spacing.default : props.paddingRight,
        /** Viewstyle props will overide all options */
        ...(props.viewStyle ? { ...props.viewStyle } : {}),
    };
    return (React.createElement(View, { testID: props.testID, style: styles, pointerEvents: props.disabled ? 'none' : 'auto' }, props.children));
};
export default withTheme(Container);
