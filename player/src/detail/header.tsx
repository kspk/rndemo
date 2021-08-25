import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

import {Item} from '../models';

const DetailHeader = (props: Item) => {
    return (
        <View style={styles.detailHeader}>
            <ImageBackground
                source={{uri: props.thmb}}
                resizeMode="cover"
                style={styles.detailHeaderImage} />
        </View>
    );
};

const styles = StyleSheet.create({
    detailHeader: {
        width: '100%',
        height: 320,
    },
    detailHeaderImage: {
        width: '100%',
        height: '100%',
    },
});

export default DetailHeader;
