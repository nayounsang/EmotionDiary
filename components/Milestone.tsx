import React from "react";
import { StyleSheet, View, Dimensions } from 'react-native';
import Sign from './Sign';
import RightSign from './RightSign';
import { useNavigation } from "@react-navigation/native";
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../types/types';

type MilestoneScreenProp = StackNavigationProp<RootStackParamList>

const Milestone = () => {

    const navigation = useNavigation<MilestoneScreenProp>();

    const demension = Dimensions.get('screen');
    //height:829.0909....,width:392.727272
    const signWidth = demension.width / 2;
    const stickWidth = demension.width / 15.7091;
    const restStickHeight = demension.height / 2 - ((3 + 2) * signWidth / 4 + 1.25 * signWidth / 8);
    const pad = demension.width / 7.5;
    const totSignWid = signWidth + signWidth / 8
    const leftpad = demension.width - pad - totSignWid;


    return (
        <View>
            <View style={styles(signWidth - stickWidth / 2, stickWidth, 1.25 * signWidth / 8).stickTop}></View>
            <View style={styles(signWidth - stickWidth / 2, stickWidth, signWidth / 4, 1.25 * signWidth / 8 + signWidth / 4).stickMiddle}></View>
            <View style={styles(signWidth - stickWidth / 2, stickWidth, signWidth / 4, (1.25 + 4) * signWidth / 8 + signWidth / 4).stickMiddle}></View>
            <View style={styles(signWidth - stickWidth / 2, stickWidth, restStickHeight, (1.25 + 8) * signWidth / 8 + signWidth / 4).stickMiddle}></View>
            <RightSign 
            onPress={()=>{navigation.navigate('Write')}}
            width={signWidth} 
            height={signWidth / 4} 
            left={leftpad} 
            top={1.25 * signWidth / 8} 
            text={' 시 작 하 기'} />
            <Sign 
            onPress={()=>{navigation.navigate('Collection')}}
            width={signWidth} 
            height={signWidth / 4} 
            left={pad} 
            top={(1.25 + 4) * signWidth / 8} 
            text={' 컬 렉 션'} />
            <RightSign 
            onPress={()=>{navigation.navigate('How')}}
            width={signWidth} 
            height={signWidth / 4} 
            left={leftpad} top={(1.25 + 8) * signWidth / 8} 
            text={' 도 움 말'} />
        </View>
    )
}

const styles = (left: number, width: number, height: number, top = 0) => StyleSheet.create({
    stick: {
        backgroundColor: 'transparent',
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderColor: 'white',
        position: 'absolute',
        left: left,
        top: top,
        width: width,
        height: height,//demebsion.heignt/2
    },
    stickTop: {
        backgroundColor: 'transparent',
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderColor: 'white',
        position: 'absolute',
        left: left,
        top: top,//0
        width: width,
        height: height,//1.25 * signWidth / 8
    },
    stickMiddle: {
        backgroundColor: 'transparent',

        borderLeftWidth: 2,
        borderRightWidth: 2,

        borderColor: 'white',
        position: 'absolute',
        left: left,
        top: top,
        width: width,
        height: height,
    },
})

export default Milestone;