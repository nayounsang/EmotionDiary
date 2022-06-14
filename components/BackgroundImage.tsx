import React, {useRef,useEffect} from "react";
import { Animated,  } from 'react-native';


interface BackgroundImageProps{
    delay: number,
    imageSource: any,
}

const BackgroundImage = ({delay, imageSource}:BackgroundImageProps) => {

    const fadeAni = useRef<Animated.Value>(new Animated.Value(0)).current;
    //opacity 1: visible, 0: invisible
  
    useEffect(() => {
        Animated.sequence([
            Animated.delay(delay),
            Animated.loop(
                Animated.sequence([
                    Animated.timing(fadeAni, {
                        toValue: 1,
                        duration: 1000,
                        useNativeDriver: true,
                    }),
                    Animated.delay(2000),
                    Animated.timing(fadeAni, {
                        toValue: 0,
                        duration: 1000,
                        useNativeDriver: true,
                    }),
                    Animated.delay(8000),
                ]),
            )
        ]).start()
    }, [fadeAni])


    return (
        <Animated.Image style={{
            opacity: fadeAni,
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
        }} source={imageSource} />
    );
}
/*

*/


export default BackgroundImage;