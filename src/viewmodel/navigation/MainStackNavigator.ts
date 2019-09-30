import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import BottomTabNavigator from './BottomTabNavigator';

const AppStackNavigator = createStackNavigator(
    {
        main : BottomTabNavigator
    },
    {
        initialRouteName: 'main'
    }
);

const AppContainer = createAppContainer(AppStackNavigator);

export default AppContainer;