import React from 'react';
import {View,Text} from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import TestHome from './test-home';
import TestMy from './test-my';

const topTab = createMaterialTopTabNavigator(
    {
        home : {
            screen: TestHome,
            navigationOptions: {
                tabBarLabel: 'home',
                swipeEnabled: true
            }
        },
        my : {
            screen: TestMy,
            navigationOptions: {
                tabBarLabel: 'my',
                swipeEnabled: true
            }
        }
    },
    {
        initialRouteName: 'home',
        tabBarPosition: 'top',
        swipeEnabled: true,
    }
);

export default topTab;