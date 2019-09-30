import React, {Key} from 'react'
import { AsyncStorage } from 'react-native';

/*
 * 本地存储的对象 :
 *   me : 用户个人信息
 */
export interface Keys{
    me: string;
    app_mode: string;
}

/*
 *  下面的函数用于操作 Keys 中的类别里的单个的值
 */
export async function getItem(key : keyof Keys) {
    let value : any;
    try {
        value = await AsyncStorage.getItem(key);
        return value;
    }catch (e) {
        console.log("错误 : 在获取 key ",key," 时出现异常");
    }
}

export async function setItem(key: keyof Keys,value: string) {
    try {
        await AsyncStorage.setItem(key,value);
    }catch (e) {
        console.log("错误 : 在设置 key ",key," 的值为 ",value ,"时抛出异常");
    }
}

export async function removeItem(key: keyof Keys) {
    try {
        await AsyncStorage.removeItem(key);
    }catch (e) {
        console.log("错误 : 在移除key时抛出异常 , key : ",key);
    }
}

/*
 *  下面的函数用于直接修改整个Keys里的类别，更新(merge)，删除，或者设置
 */
export async function getItemOJ(key: keyof Keys) {
    let result: any;
    let res: any;
    try {
        res = await AsyncStorage.getItem(key);
        result = JSON.parse(res);
        return result;
    }catch (e) {
        console.log("错误 : 在获取key[对象]时抛出异常 ,key : ",key);
    }
}

export async function setItemOJ(key: keyof Keys, value: object) {
    try {
        await AsyncStorage.setItem(key,JSON.stringify(value));
    }catch (e) {
        console.log("错误 ：在存储key[对象]时抛出异常 ,key : ",key);
    }
}

export async function removeItemOJ(key: keyof Keys){
    try {
        await AsyncStorage.removeItem(key);
    }catch (e) {
        console.log("错误 ： 在移除key[对象]时抛出异常 ,key : ",key);
    }
}

export async function mergeItem(key: keyof Keys,value : object) {
    try {
        await AsyncStorage.mergeItem(key,JSON.stringify(value));
    }catch (e) {
        console.log("错误 : 使用merge更新key",key,"对象时抛出异常");
    }
}



/**
 *  仅调试期间使用 ！
 */
export async function RemoveAll(){
    try {
        await AsyncStorage.clear();
    }catch(e){
        console.log(e);
    }
}