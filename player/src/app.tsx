import React from 'react';

import {NavigationContainer, TabActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './home/home';
import Detail from './detail/detail';
import PlayerScreen from './common/player';

import Settings from './settings/settings';

const HomeStack = createNativeStackNavigator();
const HomeTabStack = () => {
    return (
        <HomeStack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <HomeStack.Screen name="Home" component={Home} />
            <HomeStack.Screen name="Detail" component={Detail} />
        </HomeStack.Navigator>
    );
}

const SettingsStack = createNativeStackNavigator();
const SettingsTabStack = () => {
    return (
        <HomeStack.Navigator screenOptions={{
            headerShown: true,
            headerStyle: {
                backgroundColor: '#000',
            },
            headerTitleStyle: {
                color: 'white',
            },
        }}>
            <HomeStack.Screen name="Settings" component={Settings} />
        </HomeStack.Navigator>
    );
}

const BaseStack = createNativeStackNavigator();
const BaseTab = createBottomTabNavigator();
const App = () => {
    const baseTabs = () => {
        return (
            <BaseTab.Navigator screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: "#000",
                },
            }}>
                <BaseTab.Screen name="HomeTab" component={HomeTabStack} />
                <BaseTab.Screen name="SettingsTab" component={SettingsTabStack} />
            </BaseTab.Navigator>
        );
    }

    return (
        <NavigationContainer>
            <BaseStack.Navigator screenOptions={{
                headerShown: false
            }}>
                <HomeStack.Screen name="BaseTab" component={baseTabs} />
                <HomeStack.Screen name="PlayerScreen" component={PlayerScreen} />
            </BaseStack.Navigator>
        </NavigationContainer>
    );
};

export default App;
