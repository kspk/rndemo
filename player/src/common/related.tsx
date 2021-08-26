import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Item} from '../models';
import Tile from './tile';

const RelatedContent = (props: Item) => {
    const relatedItems: Item[] = [
        {
            id: 'a5932b5b-2e56-41c0-9a0e-e53637f07a2f',
            title: 'Over the snow',
            creator: 'Anna Shvets',
            url: 'http://localhost:3000/assets/v/1.mp4',
            thmb: 'http://localhost:3000/assets/i/1.png',
        },
        {
            id: '804d04fa-5698-4239-96b2-ed100eac32f1',
            title: 'Grapevine',
            creator: 'Ivan Khmelyuk',
            url: 'http://localhost:3000/assets/v/2.mp4',
            thmb: 'http://localhost:3000/assets/i/2.png',
        },
        {
            id: '3ce4e289-49b1-4343-a41c-9c8287c5e48f',
            title: 'Lavender',
            creator: 'Ivan Khmelyuk',
            url: 'http://localhost:3000/assets/v/3.mp4',
            thmb: 'http://localhost:3000/assets/i/3.png',
        },
        {
            id: 'bb8d72ac-0f22-4db7-a49d-19990ad828f8',
            title: 'Glitch',
            creator: 'Koolshooters',
            url: 'http://localhost:3000/assets/v/4.mp4',
            thmb: 'http://localhost:3000/assets/i/4.png',
        },
        {
            id: 'be8a872d-e530-4ff5-b7c6-2955b9d954d2',
            title: 'Clouds',
            creator: 'Mart Production',
            url: 'http://localhost:3000/assets/v/5.mp4',
            thmb: 'http://localhost:3000/assets/i/5.png',
        },
        {
            id: 'a9cfeef1-74be-4480-96a1-4dde0b97a98e',
            title: 'Shadow Glasses',
            creator: 'Olya Kobruseva',
            url: 'http://localhost:3000/assets/v/6.mp4',
            thmb: 'http://localhost:3000/assets/i/6.png',
        },
        {
            id: '62b637cc-c295-440e-97ce-94b8687c5a66',
            title: 'Campfire',
            creator: 'Unknown',
            url: 'http://localhost:3000/assets/v/7.mp4',
            thmb: 'http://localhost:3000/assets/i/7.png',
        },
    ];

    return (
        <>
            <Text style={styles.relatedTitle}>Related</Text>
            <View style={styles.relatedContent}>
                {relatedItems.map(i => (
                    <Tile {...i} key={i.id} />
                ))}
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    relatedTitle: {
        color: '#ccc',
        fontSize: 16,
        fontWeight: '700',
        marginTop: 32,
        paddingLeft: 16,
    },
    relatedContent: {
        width: '100%',
        padding: 8,
        marginBottom: 32,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});

export default RelatedContent;
