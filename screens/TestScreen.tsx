import React, {useEffect, useRef} from 'react';
import { View, Text, StyleSheet,ImageBackground,Animated,Image } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import Milestone from '../components/Milestone';
//노랑:긍정 파랑:부정 회색:채도
const TestScreen = () => {

  const imageSources = [
    require('../assets/image/meadow.jpg'),
    require('../assets/image/mountain.jpg'),
    require('../assets/image/sea.jpg'),
    require('../assets/image/desert.jpg'),
  ]
  return (
    <View style={{flex: 1, justifyContent: 'space-around', }}>
      <BackgroundImage imageSource={imageSources[0]} delay={0} />
      <BackgroundImage imageSource={imageSources[1]} delay={3000} />
      <BackgroundImage imageSource={imageSources[2]} delay={6000} />
      <BackgroundImage imageSource={imageSources[3]} delay={9000} />
      <Milestone />
      </View>
  );
}

export default TestScreen;
  