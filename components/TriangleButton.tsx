import React from "react";
import { TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

interface TriangleButtonProps{
    
    onPress: ()=>void,
    direction: string,
    size:number
}

const TriangleButton = ({onPress,direction,size}: TriangleButtonProps) => {
    const iconName = 'arrow-' + direction + '-drop-circle-outline';
    return(
        <TouchableOpacity onPress={onPress}>
           <Icon name={iconName} size={size} color={'black'}/>
        </TouchableOpacity>
    )
}

export default TriangleButton;