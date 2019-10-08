import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import BottomTabItems from './BottomTabItems';
import gql from 'graphql-tag';
//拿到可变主题色集 @param( color )
const color = Colors.getColor();

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
               tabBarLabel : "首页",
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
        // order: ['home','message','my'],
        tabBarComponent: BottomTabItems,
        lazy: false,
        backBehavior: 'none',
        tabBarOptions: {
            safeAreaInset: {
                bottom: 'always',
                top: 'never',
            },
            showLabel: false
        },
        navigationOptions: ({navigation}) => {
            const { routes } = navigation.state;
            const params = routes? routes[navigation.state.index].params : null ;
            const headerTitle = params ? params.title : '';
        }
    }
);

export default BottomTabNavigator;

