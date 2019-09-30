import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// 主页
import HomePage from '~vm/pages/HomePage';
// 个人页
import MyPage from '~vm/pages/MyPage';
// 消息页
import MessagePage from '~vm/pages/MessagePage';

const BottomTabNavigator = createBottomTabNavigator(
    {
        home : {
           screen: HomePage,
           navigationOptions:{
               tabBarLabel : "首页"
           }
        },
        message : {
           screen: MessagePage,
           navigationOptions: {
               tabBarLabel : "消息"
           }
        },
        my : {
            screen: MyPage,
            navigationOptions: {
                tabBarLabel : "我的"
            }
        }
    },
    {
        initialRouteName: "home",
        order: ['home','message','my'],
        tabBarOptions: {
            inactiveBackgroundColor: '#666',
        },
    }
);

export default BottomTabNavigator;

