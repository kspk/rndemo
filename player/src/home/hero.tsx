import React from 'react';
import {
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Dimensions,
} from 'react-native';

import {Item, List} from '../models';
import Video from 'react-native-video';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const HeroTile = (props: Item) => {
    return (
        <View style={styles.heroItemContainer}>
            {/* <Video
                source={{uri: props.url}}
                style={styles.heroVideoPreview}
                controls={false}
                ref={(ref) => {
                    this.player = ref
                }}
                resizeMode="cover"
                repeat={true}
                muted={true}
            /> */}
            <ImageBackground
                source={{uri: props.thmb}}
                resizeMode="cover"
                style={styles.heroItem}>
                <View style={styles.heroTextWrap}>
                    <Text style={styles.heroTitle}>{props.title}</Text>
                    <Text style={styles.heroDesc}>{props.creator}</Text>
                </View>
            </ImageBackground>
        </View>
    );
};

const Hero = (props: List) => {
    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            horizontal={true}
            style={styles.hero}
            pagingEnabled={true}
            disableIntervalMomentum={true}
            directionalLockEnabled={true}>
            {props.items.map(i => (
                <HeroTile {...i} key={i.id} />
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    hero: {
        height: 320,
        backgroundColor: '#f1f1f1',
    },
    heroItem: {
        width: width,
        height: '100%',
        display: 'flex',
        flexDirection: 'column-reverse',
    },
    heroVideoPreview: {
        width: width,
        height: '100%',
    },
    heroItemContainer: {},
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
        color: 'white',
    },
});

export default Hero;