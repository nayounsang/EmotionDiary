import React from "react";
import { Modal, View, Text, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface CardModalProps {
    modalVisible: boolean,
    setModalVisible: (param: boolean) => void,
};

const CardModal = ({ modalVisible, setModalVisible }: CardModalProps) => {

    return (
        <Modal
            animationType="slide"
            visible={modalVisible}
            transparent={true}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <TouchableWithoutFeedback onPress={() => { setModalVisible(!modalVisible) }}>
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    backgroundColor: "#121212c0",
                }}>
                    <TouchableOpacity style={{
                        backgroundColor: '#313131',
                        borderWidth: 1,
                        borderColor: '#646464',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        width: '100%',
                        borderRadius: 4,
                        flexDirection: 'row',
                        paddingVertical: 12.5,
                        paddingStart: 12.5,
                    }} onPress={() => { console.log('press') }}>
                        <Icon name={'lead-pencil'} size={21.5} color='white' />
                        <Text style={{
                            color: 'white',
                            marginStart: 17.5,
                            fontSize: 21.5,
                            fontFamily: 'LeeSeoyun',
                        }}>수 정 하 기</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        backgroundColor: '#313131',
                        borderWidth: 1,
                        borderColor: '#646464',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        width: '100%',
                        borderRadius: 4,
                        flexDirection: 'row',
                        paddingVertical: 12.5,
                        paddingStart: 12.5,
                    }} onPress={() => { console.log('press') }}>
                        <Icon name={'delete-outline'} size={21.5} color='white' />
                        <Text style={{
                            color: 'white',
                            marginStart: 17.5,
                            fontSize: 21.5,
                            fontFamily: 'LeeSeoyun',
                        }}>삭 제 하 기</Text>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        </Modal>

    );

}

export default CardModal;