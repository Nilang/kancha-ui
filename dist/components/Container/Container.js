import * as React from 'react';
import { View, Text } from 'react-native';
const hello = 'HELLO';
const Container = props => {
    return (React.createElement(View, null,
        React.createElement(Text, null, "It's Alive")));
};
export default Container;
