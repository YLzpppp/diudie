import React, { useEffect } from 'react';
import {View,Text, StyleSheet} from 'react-native';
import InterfaceGenerators from '~m/apollo/QueryMeMapping';

export default function InterfaceTest(props){

    useEffect( () => {
        console.log("Info : [InterfaceTest] 即将调用 Test函数");
        InterfaceGenerators.Test();
    });

    return (
        <View style={styles.container}>
            {

            }
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        width:'100%',
        height:'100%',
    },
    textWrapper: {
        width: '100%',
        paddingHorizontal: '3%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingVertical: 12
    },
    fontstyle: {
        color: '#555',
        fontSize: 16,
        letterSpacing: 1.2
    }
})