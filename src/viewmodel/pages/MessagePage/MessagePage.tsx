import React from 'react';
import { useState,useEffect } from 'react';
import { View,Text,StyleSheet,Image } from 'react-native';
import FlexView from '~v/components/PageContainers/FlexView';

const MessagePage: React.FC = props => {

    return (
        <FlexView justifyContent={"center"} alignItems={"center"}>
            <Text>Message Page</Text>
        </FlexView>
    );
}

const styles = StyleSheet.create({

});

export default MessagePage;
