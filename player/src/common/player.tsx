import React, {useRef} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Video from 'react-native-video';
import {Item} from '../models';
import BackButton from './back';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const PlayerScreen = ({route, navigation}) => {
    const item: Item = route.params;
    const player = useRef(null);
    return (
        <>
            <View style={styles.playerScreen}>
                <Video
                    source={{uri: item.url}}
                    style={styles.player}
                    controls={true}
                    ref={player}
                    resizeMode="contain"
                    repeat={true}
                />
            </View>
            <BackButton />
        </>
    );
};

const styles = StyleSheet.create({
    playerScreen: {
        width: width,
        height: height,
        backgroundColor: 'black',
        padding: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    player: {
        width: '100%',
        height: '100%',
    },
});

export default PlayerScreen;
