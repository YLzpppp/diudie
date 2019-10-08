import React from 'react';
import {View,Text,Animated,Easing} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import HomeTest from './test-home';
import MyTest from './test-my';
import bottomNav from './BottomTabNav';

const stack = createStackNavigator(
    {
        Main: bottomNav,
    },
    {
        headerMode: 'float',
        mode: 'modal',
        defaultNavigationOptions: {
          gesturesEnabled: true,
        },
        transitionConfig: () => ({
            transitionSpec: {
                duration: 200,
                timing: Animated.timing,
                Easing: Easing.out(Easing.poly(4))
            },
            screenInterpolator: screenProps => {
                // console.log(screenProps);
                const {layout,position,scene} = screenProps;
                console.log(position);
                const {index} = scene;
                // 上下切换，变换 y
                // const height = layout.initHeight;
                // const translateY = position.interpolate({
                //     inputRange: [index-1,index,index+1],
                //     outputRange: [height,0,0]
                // });
                // return {transform: [{translateY}]};
                //左右切换，变换 x
                // const width = layout.initWidth;
                // const translateX = position.interpolate({
                //     inputRange: [index-1,index,index+1],
                //     outputRange: [width,0,0]
                // });
                // return {transform: [{translateX}]};
                const opacity = position.interpolate({
                    inputRange: [index-1,index-0.5,index],
                    outputRange: [0,0.5,1]
                });
                return {opacity}
            }
        })
    }
);
export default stack;