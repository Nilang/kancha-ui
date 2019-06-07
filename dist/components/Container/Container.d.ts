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
import { ViewStyle } from 'react-native';
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
}
declare const Container: React.FunctionComponent<ContainerProps>;
export default Container;
