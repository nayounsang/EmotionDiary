
import React from 'react';
import { StyleSheet, Modal, View, TouchableWithoutFeedback } from 'react-native';

import ModalContent from './ModalContent';

interface MenuModalProps {
    modalVisible: boolean,
    setModalVisible: (modalVisible: boolean) => void,
}



const MenuModal = ({ modalVisible, setModalVisible }: MenuModalProps) => {

    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}>
            <TouchableWithoutFeedback onPress={() => { setModalVisible(!modalVisible) }}>
                <View style={styles.exContainer}>
                    <ModalContent iconName='text-box-outline' text='글쓰기' />
                    <ModalContent iconName='view-grid-outline' text='컬렉션' />
                    <ModalContent iconName='account-question-outline' text='도움말'/>
                </View>
            </TouchableWithoutFeedback>

        </Modal>
    );
};

const styles = StyleSheet.create({
    exContainer: {
        flex: 1,
        backgroundColor: "#121212c0",
        justifyContent: 'space-around',
        alignItems:'center',
    },
})



export default MenuModal;