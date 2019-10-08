import React from 'react';
import {View,Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import bottomNav from './BottomTabNav';
import stack from './StackNav';
import topTab from './TopTabNav';

const Cont = createAppContainer(topTab);

const AppTest : React.FC = props => {
    
    return (
        <View style={{width:'100%',height:'100%'}}>
            <Cont/>
        </View>
    )
}
export default AppTest;