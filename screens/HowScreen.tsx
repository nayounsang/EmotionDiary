import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, ImageBackground } from 'react-native';
import Appbar from '../components/Appbar';

const HowScreen = () => {

  const navigation = useNavigation();
  const demension = Dimensions.get('screen');
  const appBarHeight = demension.height / 12.8;

  return (
    <ImageBackground style={{ flex: 1 }} source={require('../assets/image/bg3.jpg')}>
      <Appbar
        contentColor='black'
        title='도 움 말'
        height={appBarHeight}
        backOnPress={() => { navigation.goBack() }} />
    </ImageBackground>
  );
};



export default HowScreen;