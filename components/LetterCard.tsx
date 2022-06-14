import React, { useState } from "react";
import { TouchableOpacity, View, StyleSheet, Text, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CardModal from './CardModal';
import { useSelector } from 'react-redux'; 
import { RootState } from "../store/store";


interface LetterCardProps {
    
    enable?: boolean,
    state: {val:any ,set:(val:any)=>void}
}

const LetterCard = ({enable,state }: LetterCardProps) => {

    

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.background}>
            <View style={styles.colorArea}>
                <Text style={{ fontSize: 80, }}>?</Text>
            </View>
            <View style={{
                flex: 1,
                paddingVertical: 10,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
            }}>
                <TextInput
                    onChangeText={text => state.set(text)}
                    multiline
                    placeholder='글쓰기'
                    value={state.val}
                    maxLength={100}
                    autoFocus
                    autoCorrect={false}
                    editable={enable}
                    style={{
                        fontSize: 20,
                        fontFamily: 'EF_Diary',
                        lineHeight: 30,
                        color:'black'
                    }} />
            </View>
            <CardModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </View>
    )
}

/*
<View style={{ flexDirection: 'row', padding: 5, justifyContent: 'flex-end', marginBottom: 10, }}>
                <TouchableOpacity onPress={() => { setModalVisible(!modalVisible) }}>
                    <Icon name={'dots-vertical'} size={25} color='black' />
                </TouchableOpacity>
            </View>
*/

//<Text style={{ fontSize: 20, color: 'black', fontFamily: 'EF_Diary', lineHeight: 27.5, }}>{text}</Text>
/*
<View style={styles.input}>
            <TextInput
              onChangeText={text => setValue(text)}
              multiline
              placeholder='글쓰기'
              value={value}
              maxLength={100}
              autoFocus
              autoCorrect={false}
              style={{
                fontSize: 20,
                fontFamily: 'EF_Diary',
                }} />
          </View>
          <TouchableOpacity
            style={{ borderRadius: 15, borderWidth: 1.5, borderColor: 'black', padding: 10, }}
            onPress={() => { console.log(value); setValue(''); }}>
            <Icon name={'lead-pencil'} color={'black'} size={25} />
          </TouchableOpacity>
*/

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
        borderRadius: 20,
        flex:1,
        padding:10,
        margin:10,
       
    },
    colorArea: {
        flex:1,
        borderRadius: 10,
        backgroundColor: '#a5e789',
        alignItems:'center',
        justifyContent:'center',
        marginBottom: 5,
    }
})

export default LetterCard;