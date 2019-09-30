import React from 'react';
import {View,Text} from 'react-native';

import AppContainer from '~vm/navigation/MainStackNavigator';

const MainViewController : React.FC = props => {
    return (
        <View style={{flexDirection:'column',width:'100%',height:'100%'}}>
            <AppContainer/>
        </View>
    )
}
export default MainViewController;
