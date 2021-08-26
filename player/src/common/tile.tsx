import React from 'react';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import {NavigationContext} from '@react-navigation/native';

import {Item} from '../models';

const Tile = (props: Item) => {
    const navigation = React.useContext(NavigationContext);

    const showDetails = () => {
        navigation?.push('Detail', props);
    };

    return (
        <TouchableOpacity activeOpacity={0.6} onPress={showDetails}>
            <View style={styles.tileWrap}>
                <Image
                    source={{uri: props.thmb}}
                    resizeMode="cover"
                    style={styles.tile}
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    tileWrap: {
        borderRadius: 4,
        margin: 4,
        overflow: 'hidden',
    },
    tile: {
        width: 116,
        height: 160,
    },
});

export default Tile;
