/***
 *  Copyright (C) 2018 ConsenSys AG
 *
 *  This file is part of uPort Mobile App
 *  uPort Mobile App is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.

 *  uPort Mobile App is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  ERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with uPort Mobile App.  If not, see <http://www.gnu.org/licenses/>.
 *
 ***/
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Themer } from 'kancha';
/**
 * Pull current theme from theme class
 */
const Theme = Themer.getTheme();
const Container = props => {
    const DividerBottomStyles = {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: Theme.colors.primary.divider,
    };
    const DividerTopStyles = {
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: Theme.colors.primary.divider,
    };
    const BaseStyles = {
        /** Basic view styles */
        width: props.w,
        height: props.h,
        flex: props.flex,
        flexDirection: props.flexDirection,
        alignItems: props.alignItems,
        justifyContent: props.justifyContent,
        backgroundColor: props.background && Theme.colors[props.background].background,
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
                    ? props.background && Theme.colors[props.background].background
                    : '#ffffff',
            }
            : {}),
        /** Margins */
        marginBottom: typeof props.marginBottom === 'boolean' ? Theme.spacing.default : props.marginBottom,
        marginTop: typeof props.marginTop === 'boolean' ? Theme.spacing.default : props.marginTop,
        marginLeft: typeof props.marginLeft === 'boolean' ? Theme.spacing.default : props.marginLeft,
        marginRight: typeof props.marginRight === 'boolean' ? Theme.spacing.default : props.marginRight,
        /** Paddings */
        padding: typeof props.padding === 'boolean' ? Theme.spacing.default : props.padding,
        paddingHorizontal: typeof props.paddingHorizontal === 'boolean' ? Theme.spacing.default : props.paddingHorizontal,
        paddingBottom: typeof props.paddingBottom === 'boolean' ? Theme.spacing.default : props.paddingBottom,
        paddingTop: typeof props.paddingTop === 'boolean' ? Theme.spacing.default : props.paddingTop,
        paddingLeft: typeof props.paddingLeft === 'boolean' ? Theme.spacing.default : props.paddingLeft,
        paddingRight: typeof props.paddingRight === 'boolean' ? Theme.spacing.default : props.paddingRight,
        /** Viewstyle props will overide all options */
        ...(props.viewStyle ? { ...props.viewStyle } : {}),
    };
    return (React.createElement(View, { testID: props.testID, style: styles, pointerEvents: props.disabled ? 'none' : 'auto' }, props.children));
};
export default Container;
