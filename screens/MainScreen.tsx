import React from 'react';
import { View, } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import Milestone from '../components/Milestone';

const MainScreen = () => {
  const imageSources = [
    require('../assets/image/meadow.jpg'),
    require('../assets/image/mountain.jpg'),
    require('../assets/image/sea.jpg'),
    require('../assets/image/desert.jpg'),
  ]
  return (
    <View style={{ flex: 1, justifyContent: 'space-around', }}>
      <BackgroundImage imageSource={imageSources[0]} delay={0} />
      <BackgroundImage imageSource={imageSources[1]} delay={3000} />
      <BackgroundImage imageSource={imageSources[2]} delay={6000} />
      <BackgroundImage imageSource={imageSources[3]} delay={9000} />
      <Milestone />
    </View>
  );
};



export default MainScreen;
