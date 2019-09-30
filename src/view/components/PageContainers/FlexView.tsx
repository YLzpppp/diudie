import React from 'react';
import {View, StyleSheet, ViewPropTypes} from 'react-native';

/*
 * FlexView <==> Flex-flexStart-flexStart-column
 * 即默认为竖直( column )方向，flex布局，主轴方向 flex-start ,次轴方向 flex-start 的 View
 * 接受 3 个可选属性, flexDirection,justifyContent,alignItems 用于改变flex布局的子元素布局顺序
 * 默认值 : column => flex-start , row => flex-start
 */

export interface Props {
    flexDirection?: any;
    justifyContent?: any;
    alignItems?: any;
    children: any;
}

export default function FlexView(props: Props){
    let {flexDirection = "column" ,justifyContent = "flex-start",alignItems = "flex-start"} = props;
    switch (flexDirection) {
        case "column" :
            break;
        case "row" :
            flexDirection = "row";
            break;
        default :
            console.log("Style-Prop Error => FlexView.tsx flexDirection prop is none of 'row' neither 'column' ,please check the value you passed in .  VALUE : ",flexDirection);
    }
    switch (justifyContent) {
        case "flex-start":
            break;
        case "flex-end":
            justifyContent = "flex-end";
            break;
        case "center":
            justifyContent = "center";
            break;
        case "space-between":
            justifyContent = "space-between";
            break;
        case "space-around" :
            justifyContent = "space-around";
            break;
        default:
            console.log("Style-Prop Error => FlexView.tsx justifyContent prop is not one of {\"flex-start\",\"flex-end\",\"center\",\"space-between\",\"space-around\"} ,please check the value you passed in .  VALUE : ",justifyContent);
    }
    switch (alignItems) {
        case "flex-start":
            break;
        case "flex-end":
            alignItems = "flex-end";
            break;
        case "center":
            alignItems = "center";
            break;
        case "space-between":
            alignItems = "space-between";
            break;
        case "space-around" :
            alignItems = "space-around";
            break;
        default:
            console.log("Style-Prop Error => FlexViewsx : alignItems prop is not one of {\"flex-start\",\"flex-end\",\"center\",\"space-between\",\"space-around\"} ,please check the value you passed in .  VALUE : ",alignItems);
    }
    let so = {
        flexDirection: flexDirection,
        justifyContent: justifyContent,
        alignItems: alignItems,
        width: Device.width,
        height: Device.height
    };
    let styles = StyleSheet.create({
        flss: so
    });

    return (
        <View style={styles.flss}>
            {props.children}
        </View>
    )
}

