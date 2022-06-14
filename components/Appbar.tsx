import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MenuModal from './MenuModal';


interface AppbarProps {
    contentColor: string,
    title: string,
    height: number,
    backOnPress: () => void,
}

const Appbar = ({
    contentColor = 'black',
    title,
    height,
    backOnPress,
}: AppbarProps) => {

    const [modalVisible, setModalVisible] = useState<boolean>(false);


    return (
        <View style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            flexDirection: 'row',
            backgroundColor: 'transparent',
            height: height,
            borderBottomWidth: 0.8,
            borderBottomColor: contentColor,
            alignItems: 'center',
            paddingHorizontal: height / 4,
        }}>
            <TouchableOpacity onPress={backOnPress}>
                <Icon name='arrow-left-bold-outline' color={contentColor} size={height / 2.2} />
            </TouchableOpacity>
            <Text style={{
                color: contentColor,
                fontFamily: 'EF_Diary',

                marginLeft: height / 4,
                fontSize: height / 2.2,
            }}>{title}</Text>
            <View style={{ justifyContent: 'flex-end', flexDirection: 'row', flex: 1, }}>
                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                    <Icon name='menu' color={contentColor} size={height / 2.2} />
                </TouchableOpacity>
            </View>
            <MenuModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </View>
    );
};



export default Appbar;