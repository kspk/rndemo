import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {NavigationContext} from '@react-navigation/native';

import {Item} from '../models';

const DetailContent = (props: Item) => {
    const navigation = React.useContext(NavigationContext);

    const playVideo = () => {
        navigation?.push('PlayerScreen', props);
    };

    return (
        <View style={styles.detailContent}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.creator}>{props.creator}</Text>
            <View style={styles.playButtonWrap}>
                <Button
                    style={styles.playButton}
                    color="#000000"
                    title="Play"
                    onPress={playVideo}
                />
            </View>
            <Text style={styles.summary}>
                Sem viverra aliquet eget sit amet. Ridiculus mus mauris vitae
                ultricies leo integer malesuada nunc. Ut ornare lectus sit amet
                est. Egestas diam in arcu cursus euismod quis viverra. Gravida
                quis blandit turpis cursus. Orci nulla pellentesque dignissim
                enim sit amet. Lobortis scelerisque fermentum dui faucibus in
                ornare. Quis commodo odio aenean sed adipiscing diam. Odio
                aenean sed adipiscing diam donec.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    detailContent: {
        width: '100%',
        padding: 8,
    },
    title: {
        fontWeight: '700',
        fontSize: 28,
        color: 'white',
        marginTop: 4,
        marginBottom: 4,
    },
    creator: {
        fontWeight: '300',
        fontSize: 16,
        color: 'white',
        marginBottom: 16,
    },
    playButtonWrap: {
        backgroundColor: 'white',
        borderRadius: 3,
        marginBottom: 16,
    },
    playButton: {},
    summary: {
        padding: 8,
        fontSize: 14,
        fontWeight: '500',
        color: 'white',
    },
});

export default DetailContent;
