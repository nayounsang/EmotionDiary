import React from "react";
import { View, Text, StyleSheet, TouchableOpacity  } from 'react-native';

interface SignProps{
    width:number,
    height:number,
    left:number,
    top:number,
    text:string,
    onPress?:()=>void,
}

const RightSign = ({width,height,text,left,top,onPress}:SignProps) => {
    return(
        <TouchableOpacity style={{flex: 1,}} onPress={onPress}>
            <View style={styles(width,height,left,top).triangle}>
            </View>
            <View style={styles(width,height,left,top).square}>
                <Text style={styles(width,height,0,0).text}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = (width:number,height:number,left:number,top:number) => StyleSheet.create({
    triangle: {
        position:'absolute',
        top:top + (height/1.4142)/5,
        left:left+ width  -(height/1.4142)/2,   
        borderTopWidth: 2,
        borderRightWidth: 2,
        borderColor: 'white',
        backgroundColor: 'transparent',
        width: height/1.4142,
        height: height/1.4142,
        transform:[{rotate:'45deg'}]
    },
    square:{
        position:'absolute',
        top:top,
        left:left,
        backgroundColor: 'transparent',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        borderColor: 'white',
        height:height,
        width:width,
        borderBottomLeftRadius: (height/1.4142)/8,
        borderTopLeftRadius: (height/1.4142)/8,
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        fontSize:height/2,
        color:'white',
        fontWeight:'500',
        fontFamily:'LeeSeoyun',
    }
})

export default RightSign;