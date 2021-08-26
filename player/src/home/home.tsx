import React from 'react';
import {ScrollView, StatusBar, StyleSheet, View} from 'react-native';

import feed from '../feed';
import Hero from './hero';
import Row from '../common/row';

const Home = () => (
    <View style={styles.homeScreen}>
        <StatusBar barStyle={'light-content'} />
        <ScrollView>
            <Hero {...feed.hero} key={feed.hero.id} />
            {feed.lists.map(i => (
                <Row {...i} key={i.id} />
            ))}
        </ScrollView>
    </View>
);

const styles = StyleSheet.create({
    homeScreen: {
        backgroundColor: '#111',
    },
});

export default Home;
