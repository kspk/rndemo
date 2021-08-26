import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ScrollView,
    Image,
    Button,
} from 'react-native';

import DetailHeader from './header';
import DetailContent from './content';
import {Item} from '../models';
import BackButton from '../common/back';
import RelatedContent from '../common/related';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Detail = ({route, navigation}) => {
    const item: Item = route.params;

    return (
        <>
            <ScrollView style={styles.detailScreen}>
                <DetailHeader {...item} />
                <DetailContent {...item} />
                <RelatedContent {...item} />
            </ScrollView>
            <BackButton />
        </>
    );
};

const styles = StyleSheet.create({
    detailScreen: {
        width: width,
        backgroundColor: '#111',
    },
});

export default Detail;
