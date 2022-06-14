import React, { useEffect, useState } from 'react';
import { Dimensions, ImageBackground, StyleSheet, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Appbar from '../components/Appbar';
import { useNavigation } from '@react-navigation/native';
import TriangleButton from '../components/TriangleButton';
import LetterCard from '../components/LetterCard';
import CardButtons from '../components/CardButtons';
import { Button, Snackbar } from 'react-native-paper';
import { addCard, addText} from '../reducer/text.reducer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { CardType } from '../types/types';

const WriteScreen = () => {

  const dispatch = useDispatch();
  const cards = useSelector((state: RootState) => state.text.data);
  
  const [index,setIndex] = useState<number>(0);

  const navigation = useNavigation();

  const demension = Dimensions.get('screen');
  const appBarHeight = demension.height / 12.8;

  const [enable, setEnable] = useState<boolean>(true);
  const [textVal, setTextVal] = useState<string>('');

  const [snackVisible, setSnackVisible] = useState(false);
  const [snackText, setSnackText] = useState<string>('');

  useEffect(() => {
    dispatch(addCard());
  }, [])



  const rightHandler = () => {
    if (index<cards.length - 1){
      setIndex(index + 1);
      setTextVal(cards[index].text);
      if (index == cards.length - 1){
        setEnable(true);
      }
      else {
        setEnable(false);
      }
    }
    else {
      setSnackText('마지막 페이지입니다');
      setSnackVisible(!snackVisible);
    }
  }
  const leftHandler = () => {
    if (index>0){
      setIndex(index-1); 
      setTextVal(cards[index].text);
      setEnable(false);
    }
    else {
      setSnackText('첫번째 페이지입니다');
      setSnackVisible(!snackVisible);
    }
  }
  
  const addHandler = () => {
    const testtextVal = textVal.trim();
    if (testtextVal == ''){
      setSnackText('내용을 입력해주세요!');
      setSnackVisible(!snackVisible);
    }
    else{
      let tempCard = {idx: cards.length - 1, text: textVal};
      dispatch(addText(tempCard));
      dispatch(addCard());
      setIndex(index + 1);  
      setTextVal('');
    }
  }

  return (
    <ImageBackground style={{ flex: 1 }} source={require('../assets/image/bg1.jpg')}>
      <Appbar
        contentColor='black'
        title='글 쓰 기'
        height={appBarHeight}
        backOnPress={() => { navigation.goBack() }} />
      <View style={{ flex: 1, }} >
        <View style={{ width: '100%', height: appBarHeight }} />
        <View style={styles.cardArea}>
          <TriangleButton onPress={leftHandler} size={50} direction='left' />
          <LetterCard enable={enable} state={{val:textVal,set:setTextVal}} />
          <TriangleButton onPress={rightHandler} size={50} direction='right' />
        </View>
        <CardButtons inputHandler={addHandler} />
      </View>
      <Button
        mode='contained'
        onPress={() => {
          console.log(index);
        }}>index</Button>
      <Button
        mode='contained'
        onPress={() => {
          console.log(cards);
        }}>cards</Button>
      
      <Snackbar
        duration={750}
        style= {{
          borderRadius: 15,
          backgroundColor: '#060606c8',
          paddingVertical: 7.5,
        }}
        visible={snackVisible}
        onDismiss={() => { setSnackVisible(false) }}>
        {snackText}
      </Snackbar>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: 'black',
    padding: 3,
    marginVertical: 5,
    marginRight: 10,
    flex: 1,
    justifyContent: 'flex-start',
  },
  cardArea: {
    flex: 3.5,
    backgroundColor: 'transparent',
    marginTop: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 30,
  }
})

export default WriteScreen;