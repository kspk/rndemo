import React from 'react';
import {ScrollView, StatusBar, View} from 'react-native';

import feed from '../feed';
import Hero from './hero';
import Row from '../common/row';

const Home = () => (
    <View>
        <StatusBar barStyle={'light-content'} />
        <ScrollView>
            <Hero {...feed.hero} key={feed.hero.id} />
            {feed.lists.map(i => (
                <Row {...i} key={i.id} />
            ))}
        </ScrollView>
    </View>
);

export default Home;
