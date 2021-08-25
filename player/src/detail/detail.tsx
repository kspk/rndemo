import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ScrollView,
    Image,
} from 'react-native';

import DetailHeader from './header';
import {Item} from '../models';
import BackButton from '../common/back';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Detail = ({route, navigation}) => {
    const item: Item = route.params;

    return (
        <>
            <ScrollView style={styles.detailPage}>
                <DetailHeader {...item} />
                <Text>This is Detail page: {item.title}</Text>
            </ScrollView>
            <BackButton />
        </>
    );
};

const styles = StyleSheet.create({
    detailPage: {
        width: width,
    },
});

export default Detail;
