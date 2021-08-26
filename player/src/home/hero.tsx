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
import Carousel from 'react-native-snap-carousel';
import {useRef} from 'react';
import { useState } from 'react';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const HeroTile = (props: Item) => {
    const player = useRef(null);
    return (
        <View style={styles.heroItemContainer}>
            <ImageBackground
                source={{uri: props.thmb}}
                resizeMode="cover"
                style={styles.heroItem}
            />
            {/* <Video
                source={{uri: props.url}}
                style={styles.heroVideoPreview}
                controls={false}
                ref={player}
                resizeMode="cover"
                repeat={true}
                muted={true}
            /> */}
            <View style={styles.heroTextWrap}>
                <Text style={styles.heroTitle}>{props.title}</Text>
                <Text style={styles.heroDesc}>{props.creator}</Text>
            </View>
        </View>
    );
};

const Hero = (props: List) => {
    const carousel = useRef(null);
    const renderItem = ({item, index}) => <HeroTile {...item} key={item.id} />;

    const onSnapToItem = (slideIndex: number) => {
        if (carousel.current) {
            carousel.current.snapToItem(slideIndex);
        }
    };

    return (
        <>
            <Carousel
                ref={carousel}
                data={props.items}
                renderItem={renderItem}
                sliderWidth={width}
                sliderHeight={320}
                itemWidth={width}
                itemHeight={320}
                loop={false}
                onSnapToItem={onSnapToItem}
            />
        </>
    );
};

const styles = StyleSheet.create({
    heroItemContainer: {
        width: width,
        height: 320,
    },
    heroItem: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    heroVideoPreview: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    heroTextWrap: {
        position: 'absolute',
        bottom: 0,
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
