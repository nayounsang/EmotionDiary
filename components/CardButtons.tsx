import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface CardButtonsProps {
    inputHandler: () => void,
}

const CardButtons = ({inputHandler}: CardButtonsProps) => {

    return (
        <View style={styles.area}>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <TouchableOpacity onPress={inputHandler} style={styles.button}>
                    <Icon name='lead-pencil' size={25} color='black' />
                </TouchableOpacity>
                <Text style={{
                    fontFamily: 'LeeSeoyun',
                    color: 'black',
                    fontSize: 22.5,
                    marginTop: 10,
                }}>쓰기</Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'trasparent',
        borderWidth: 3,
        borderRadius: 25,
        width: 50,
        height: 50,
    },
    area: {
        paddingVertical: 15,
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',

    }
})

export default CardButtons;