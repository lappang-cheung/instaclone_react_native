import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {MainFeed, Login, Camera, Profile} from './components/screens';

const Stack = createStackNavigator()


class InstaClone extends Component {

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="MainFeed" component={MainFeed} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default InstaClone;