import React from 'react';
import {View,Text,Button} from 'react-native';

function TestMy(props:any) {
    return (
        <View style={{justifyContent:'center',alignItems:'center',width:'100%',height:'100%',backgroundColor:'green'}}>
            <Text>Home</Text>
            <Button 
            title="go to Home Page" 
            onPress={ () => {props.navigation.navigate('Home')}}
            ></Button>
        </View>
    )
}

export default TestMy;