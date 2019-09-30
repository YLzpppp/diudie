import React from 'react';
import { useState,useEffect } from 'react';
import { View,Text,StyleSheet,Image,Button } from 'react-native';
import FlexView from '~v/components/PageContainers/FlexView';
import {observer} from 'mobx-react';
import AppStore from '../../../model/status/appStore';
import * as storage from '../../../model/Storage';



const Homepage: React.FC = observer (props => {
    const color = colors.getColor();
    return (
        <FlexView justifyContent={"center"} alignItems={"center"}>
            <View style={{width:100,height:100,backgroundColor: color.SecondaryColor}}/>

            <Text>{ AppStore.mode ? "夜间模式" : "白天模式"}</Text>
            <Button title="change to night" onPress={() => AppStore.changeMode(true)} style={{marginTop:20}}></Button>
            <Button title="change to day" onPress={ () => AppStore.changeMode(false)} style={{marginTop:20}}></Button>
            <Button title="clear" onPress={ () => storage.RemoveAll()} style={{marginTop:20}}></Button>

        </FlexView>
    );
});

const styles = StyleSheet.create({

});

export default Homepage;
