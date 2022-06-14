import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, ImageBackground } from 'react-native';
import Appbar from '../components/Appbar';

const CollectionScreen = () => {

  const navigation = useNavigation();
  const demension = Dimensions.get('screen');
  const appBarHeight = demension.height / 12.8;

  return (
    <ImageBackground style={{ flex: 1 }} source={require('../assets/image/bg2.jpg')}>
      <Appbar
        contentColor='black'
        title='컬 렉 션'
        height={appBarHeight}
        backOnPress={() => { navigation.goBack() }} />
    </ImageBackground>
  );
};

  
  
  export default CollectionScreen;