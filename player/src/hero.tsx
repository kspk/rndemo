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
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';

import { Item, List } from './models';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const HeroTile = (props: Item) => {
    return (
        <View style={styles.heroItemContainer}>
            <ImageBackground
                source={{ uri: props.thmb }}
                resizeMode='cover'
                style={styles.heroItem}>
                <View style={styles.heroTextWrap}>
                    <Text style={styles.heroTitle}>{props.title}</Text>
                    <Text style={styles.heroDesc}>{props.creator}</Text>
                </View>
            </ImageBackground>
        </View>
    );
}

const Hero = (props: List) => {
    return (
        <ScrollView 
            contentInsetAdjustmentBehavior="automatic" 
            horizontal={true}
            style={styles.hero}
            pagingEnabled={true} 
            disableIntervalMomentum={true}
            directionalLockEnabled={true}>
            {
                props.items.map(i => <HeroTile {...i} key={i.id}></HeroTile>)
            }
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    hero: {
        height: 320,
        backgroundColor: '#f1f1f1'
    },
    heroItem: {
        width: width,
        height: '100%',
        display: 'flex',
        flexDirection: 'column-reverse',
    },
    heroItemContainer: {

    },
    heroTextWrap: {
        padding: 16,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    heroTitle: {
        fontSize: 32,
        fontWeight: '200',
        color: 'white',
    },
    heroDesc: {
        fontSize: 18,
        color: 'white'
    }
});

export default Hero;
