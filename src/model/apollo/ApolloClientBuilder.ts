import React from 'react';
import { useState,useEffect,useCallback,useMemo } from 'react';
import {HttpLink,InMemoryCache} from 'apollo-boost';
import ApolloClient from 'apollo-boost';


interface DeviceReport {
    os: string;
    build: string;
    referrer: string;
    version: string;
    appid: string;
    package: string;
    brand: string;
    deviceCountry: string;
    systemVersion: string;
    uniqueId: string;
    deviceId: string;
    ip: string;
}
const deviceHeaders: DeviceReport = {};

// const httplink = new HttpLink({
//     uri: "http://localhost:4000/"
// });
export function clientBuilder(token: string){
    const buildClient = useCallback( () => {
        return new ApolloClient({
            cache: new InMemoryCache(),
            uri: Configs.serverRoot,
            request: async operation => {
                operation.setContext({
                    headers: {
                        token,
                        Authorization: token ? `Bearer ${token}` : '',
                        ...deviceHeaders
                    }
                });
            },
            onError: ({graphQLErrors,networkErrors,operation,forward}) => {
                if(graphQLErrors){
                    graphQLErrors.map( error => {

                    });
                }
                if(networkErrors) {

                }
            }
        })
    }, [token]);
    return useMemo( () => buildClient(), [buildClient]);
}