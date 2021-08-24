/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
    Image,
    StyleSheet,
    View,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';
import { NavigationContext } from '@react-navigation/native';

import { Item } from './models';

const Tile = (props: Item) => {
    const navigation = React.useContext(NavigationContext);

    const showDetails = () => {
        navigation?.navigate("Detail");
    }

    return (
        <TouchableOpacity activeOpacity={.6} onPress={showDetails}>
            <View style={styles.tileWrap}>
                <Image
                    source={{ uri: props.thmb }}
                    resizeMode='cover'
                    style={styles.tile}>
                </Image>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    tileWrap: {
        borderRadius: 8,
        margin: 4,
        overflow: 'hidden',
    },
    tile: {
        width: 220,
        height: 120,
    }
});

export default Tile;
