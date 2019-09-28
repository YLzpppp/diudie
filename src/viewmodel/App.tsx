import React from 'react';
import {useState,useEffect} from 'react';
import {View,Text} from 'react-native';
// @ts-ignore
import TestHome from "@src/ztest/test-home";
// @ts-ignore
import TestMy from '@src/ztest/test-my';


const App : React.FC = props => {

    return (
        <View>
            <Text>Hello Friends</Text>
            <TestHome/>
            <TestMy/>
        </View>
    )
}

export default App;
