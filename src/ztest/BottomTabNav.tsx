import React from 'react';
import {View,Text} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import TestHome from './test-home';
import TestMy from './test-my';

function customTabBar(props){
    const {navigation ,tabBarOnPress,renderIcon} = props;
    const {routes,index: currentIndex} = navigation.state;
    console.log(" currentIndex :",currentIndex)
    console.log("props 是 : ",props);
    console.log("renderIcon 是 : ",renderIcon);
    console.log("路由有 : ",routes);
    console.log("navigation.state 的值为 : ",navigation.state);
    const tabs = routes.map( (route,index) => {
        const scene = {
            
        }
        return <Text style={{color:'black'}}>{route.routeName}</Text>
    });
    return <View style={{height:56,width:'100%',backgroundColor:'#fff',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>{tabs}</View>
}

const bottomNav = createBottomTabNavigator(
    {
        Home: TestHome,
        My : TestMy
    },
    {
        initialRouteName: 'Home',
        order: ['Home','My'],
        tabBarComponent: customTabBar,
        tabBarPosition: 'bottom',
        swipeEnabled: true
    }
);

export default bottomNav;



// defaultNavigationOptions: ({navigation}) => ({
//     tabBarLabel: () => {
//         const { routeName } = navigation.state;
//         // console.log("Data : [BottomTabNav] navigation : ",navigation.state);
//         const Label = (
//             <Text style={{textAlign:'center'}}>{routeName}</Text>
//         );
//         return Label;
//     },
//     tabBarIcon : () => {
//         const { routeName } = navigation.state;
//         if(routeName === 'Home'){
//             return (
//                 <Icon
//                     name = "home"
//                     size={20}
//                     color="red"
//                 />
//             )
//         }else if(routeName === 'My'){
//             return (
//                 <Icon
//                     name="meh-o"
//                     size={20}
//                     color="red"
//                 />
//             )
//         }
//     },
//     tabBarOnPress : () => {
//         const { routeName } = navigation.state;
//         if(routeName === 'Home'){
//             navigation.navigate('Home');
//         }else if(routeName === 'My'){
//             navigation.navigate('My');
//         }
//     },
// }),