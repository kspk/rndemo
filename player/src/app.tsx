import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './home/home';
import Detail from './detail/detail';
import PlayerScreen from './common/player';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Detail" component={Detail} />
                <Stack.Screen name="PlayerScreen" component={PlayerScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
