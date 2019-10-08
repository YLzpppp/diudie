import React from 'react';
import { useState,useEffect,useCallback,useMemo } from 'react';
import { View,Text,StyleSheet,Image } from 'react-native';
import FlexView from '~v/components/PageContainers/FlexView';
import {HttpLink,InMemoryCache} from 'apollo-boost';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const client = new ApolloClient({
    uri: Configs.serverRoot,
    cache: new InMemoryCache
});

let statement = `
    {
        user(id: 2){
            id
            name
            age
            adult
        }
    }
`

const MessagePage: React.FC = props => {

    function __fetchdata(){
        client.query({
            query: gql(statement)
        }).then( ({data}) => {console.log("Data : [MessagePage]  ",data)});
    }

    useEffect(() => {
        __fetchdata();
    });

    return (
        <FlexView justifyContent={"center"} alignItems={"center"}>
            <Text>Message Page</Text>
        </FlexView>
    );
}

const styles = StyleSheet.create({

});

export default MessagePage;
