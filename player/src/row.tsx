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
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { List } from './models';
import Tile from './tile';

const Row = (props: List) => {
    return (
        <View
            style={styles.rowWrapper}>
            <Text style={styles.rowTitle}>{props.title}</Text>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                horizontal={true}
                style={styles.rowList}>
                {
                    props.items.map(i => <Tile {...i} key={i.id}></Tile>)
                }
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    rowWrapper: {
        display: 'flex',
        flexDirection: 'column',
    },
    rowTitle: {
        margin: 8,
        marginBottom: 0
    },
    rowList: {
    }
});

export default Row;
