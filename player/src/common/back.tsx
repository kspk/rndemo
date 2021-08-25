import {NavigationContext} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

const BackButton = () => {
    const navigation = React.useContext(NavigationContext);

    const goBack = () => {
        navigation?.pop();
    };

    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={goBack}
            style={styles.backWrap}>
            <Image source={require('./back.png')} style={styles.back} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    backWrap: {
        position: 'absolute',
        top: 44,
        left: 8,
    },
    back: {
        width: 32,
        height: 32,
    },
});

export default BackButton;
