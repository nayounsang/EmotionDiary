import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../types/types';
import { StackNavigationProp } from '@react-navigation/stack';

interface ModalContentProps{
    iconName:string,
    text: string,
    
}

type MenuScreenProp = StackNavigationProp<RootStackParamList>

const ModalContent = ({iconName,text}:ModalContentProps) => {

    const navigation = useNavigation<MenuScreenProp>();
    const route = useRoute().name;

    const demension = Dimensions.get('screen');
    const height = demension.height/10;

    const translate = {
        글쓰기: 'Write',
        컬렉션: 'Collection',
        도움말: 'How',
    }
    const textKey = text as keyof typeof translate;


    const onPress = () => {
        if (route != translate[textKey]) {
            const screenVal = translate[textKey] as keyof RootStackParamList;
            navigation.navigate(screenVal);
        }
    }


    //ffde72 efd790
    //active? '#6fa8dc':'#ffe599'

    return (
        <TouchableOpacity onPress={onPress} style={{alignItems:'center'}}>
            <View style={styles(translate[textKey] == route? '#6fa8dc' : '#f0d37c',height).iconArea}>
                <Icon name={iconName} color={'white'} size={height/1.5}/>
            </View>
            <Text style={styles('#ffde72',height).text}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = (backgroundColor:string,size:number) => StyleSheet.create({
    iconArea: {
        borderRadius: size/8.5,
        alignItems:'center',
        justifyContent:'center',
        padding: 5,
        backgroundColor: backgroundColor,
        width:size,
        height:size,
    },
    text: {
        color: 'white',
        fontFamily: 'LeeSeoyun',
        marginTop: 12,
        fontSize:size/3,
    }
})



export default ModalContent;