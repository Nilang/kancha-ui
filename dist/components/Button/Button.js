import * as React from 'react';
import { TouchableHighlight, Text } from 'react-native';
const Button = props => {
    return (React.createElement(TouchableHighlight, { style: { height: 50, backgroundColor: 'white' }, onPress: props.onPress },
        React.createElement(Text, null, props.children)));
};
export default Button;
