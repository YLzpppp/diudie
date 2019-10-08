import React from 'react';
import { StyleSheet, View, Text, Image,PixelRatio, TouchableWithoutFeedback } from 'react-native';
import { observer } from 'mobx-react';
import appStore from '~m/status/appStore';
import AppColor from '~v/res/values/colors';

const color = AppColor.Instance().getColor();

const BottomTabItems = observer( props => {
    const { navigation,onTabPress,renderIcon } = props;
    const { routes, index: currentIndex} = navigation.state;
    const TabItems = routes.map((route,index) => {
        const scene = {
            index,
            focused: index === currentIndex,
            route
        };
        return (
            <TouchableWithoutFeedback 
                key = {route.key}
                onPress = { () => onTabPress({route})}
            >
                <View style={styles.tabItem}>{renderIcon(scene)}</View>
            </TouchableWithoutFeedback>
        ); 
    });
    // const PublicItem = (
    //     <TouchableWithoutFeedback key="create" onPress={() => navigation.navigate(login ? 'Publish' : 'Login')}>
    //         <View style={styles.tabItem}>
    //             <Image source={require('@src/assets/images/publish.png')} style={{ width: 42, height: 42 }} />
    //         </View>
    //     </TouchableWithoutFeedback>
    // );
    const nightMode = appStore.mode === true;
    return <View style={[styles.tabBarContainer, nightMode && styles.nightmode]}></View>
});

const styles = StyleSheet.create({
    tabBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 56,
        backgroundColor:'transparent',
        borderTopWidth: 1/PixelRatio.get(),
        borderTopColor: appStore.mode ? 'transparent':color.LightGrayColor
    },
    nightmode: {
        backgroundColor: color.primaryColor,
    },
    tabItem: {
        flex:1,
        position:'relative',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default BottomTabItems;