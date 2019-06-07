import * as React from 'react';
import { Text } from 'react-native';
import { withTheme } from '@theme/index';
const TextTypes = {
    H1: 'h1',
    H2: 'h2',
    H3: 'h3',
    H4: 'h4',
    H5: 'h5',
    ListItem: 'listItem',
    ListItemRight: 'listItemRight',
    ListItemNote: 'listItemNote',
    SubTitle: 'subTitle',
    Body: 'body',
    Button: 'button',
    NavButton: 'navButton',
    Summary: 'summary',
    SectionHeader: 'sectionHeader',
};
const KanchaText = props => {
    const TextThemeMap = {
        h1: {
            fontSize: props.theme.text.sizes.h1,
            color: props.theme.colors.primary.text,
        },
        h2: {
            fontSize: props.theme.text.sizes.h2,
            color: props.theme.colors.primary.text,
        },
        h3: {
            fontSize: props.theme.text.sizes.h3,
            color: props.theme.colors.primary.text,
        },
        h4: {
            fontSize: props.theme.text.sizes.h4,
            color: props.theme.colors.primary.text,
        },
        h5: {
            fontSize: props.theme.text.sizes.h5,
            color: props.theme.colors.primary.text,
        },
        subTitle: {
            fontSize: props.theme.text.sizes.subTitle,
            color: props.theme.colors.secondary.text,
        },
        listItem: {
            fontSize: props.theme.text.sizes.listItem,
            color: props.theme.colors.primary.text,
        },
        listItemNote: {
            fontSize: props.theme.text.sizes.listItemNote,
            color: props.theme.colors.secondary.text,
        },
        listItemRight: {
            fontSize: props.theme.text.sizes.listItemRight,
            color: props.theme.colors.secondary.text,
        },
        summary: {
            fontSize: props.theme.text.sizes.summary,
            color: props.theme.colors.secondary.text,
        },
        body: {
            fontSize: props.theme.text.sizes.body,
            color: props.theme.colors.primary.text,
            lineHeight: props.theme.text.lineHeights.body,
        },
        button: {
            fontSize: props.theme.text.sizes.button,
        },
        navButton: {
            fontSize: props.theme.text.sizes.navButton,
        },
        sectionHeader: {
            fontSize: props.theme.text.sizes.sectionHeader,
            color: props.theme.colors.secondary.text,
        },
    };
    const styles = {
        ...(props.type ? { ...TextThemeMap[props.type] } : {}),
        ...(props.textColor ? { color: props.textColor } : {}),
        ...(props.bold ? { fontWeight: 'bold' } : {}),
        ...(props.warn ? { color: props.theme.colors.warning.text } : {}),
        ...(props.textAlign ? { textAlign: props.textAlign } : {}),
        ...(props.buttonTextColor
            ? {
                color: props.block
                    ? props.theme.colors[props.buttonTextColor].buttonText[props.block]
                    : props.theme.colors[props.buttonTextColor].buttonText.filled,
            }
            : {}),
        ...(props.paddingBottom ? { paddingBottom: props.paddingBottom } : {}),
        ...(props.paddingBottom && typeof props.paddingBottom === 'boolean'
            ? { paddingBottom: props.theme.spacing.default }
            : {}),
        ...(props.transform ? { textTransform: props.transform } : {}),
        ...(props.textStyle ? { ...props.textStyle } : {}),
    };
    return React.createElement(Text, { style: styles }, props.children);
};
KanchaText.defaultProps = {
    type: TextTypes.Body,
};
KanchaText.Types = TextTypes;
export default withTheme(KanchaText);
