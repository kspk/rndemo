/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationRouteContext } from '@react-navigation/native';
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import feed from './feed';
import Hero from './hero';
import Row from './row';

const Home = () => {
    return (
        <View>
            <StatusBar barStyle={'light-content'} />
            <ScrollView>
                <Hero {...feed.hero} key={feed.hero.id}></Hero>
                {
                    feed.lists.map(i => <Row {...i} key={i.id} ></Row>)
                }
            </ScrollView>
        </View>
    );
};



export default Home;
