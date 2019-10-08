import React from 'react';
import {View,Text,Button} from 'react-native';

function TestHome(props:any) {
    return (
        <View style={{justifyContent:'center',alignItems:'center',width:'100%',height:'100%',backgroundColor:'orange'}}>
            <Text>Home</Text>
            <Button 
            title="go to My Page" 
            onPress={ () => {props.navigation.navigate('My')}}
            ></Button>
        </View>
    )
}

export default TestHome;