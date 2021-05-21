import React, {useEffect, useRef} from 'react';
import {
  View,
  useWindowDimensions,
  Animated,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import SVG, {G, Circle} from 'react-native-svg';
import AntDesgin from 'react-native-vector-icons/AntDesign';

export default function NextButton({percentage , scrollTo}) {
  const size = 128;
  const strokeWidth = 2;
  const center = size / 2;
  const raduis = size / 2 - strokeWidth / 2;
  const circumFerence = 2 * Math.PI * raduis;

  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progRef = useRef(null);

  const animation = toValue => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation(percentage);
  }, [percentage]);

  useEffect(() => {
    progressAnimation.addListener(value => {
      const strokeDashoffset =
        circumFerence - (circumFerence * value.value) / 100;
      if (progRef?.current) {
        progRef.current.setNativeProps({
            strokeDashoffset,
        });
      }
    }, [percentage]);

    return () => {
        progressAnimation.removeAllListeners()
    }
  }, []);



  return (
    <View style={styles.container}>
      <SVG width={size} height={size}>
        <G rotation="-90" origin={center}>
          <Circle
            cx={center}
            cy={center}
            r={raduis}
            strokeWidth={strokeWidth}
            stroke="#E6E7E8"
          />
          <Circle
           ref={progRef}
            cx={center}
            cy={center}
            r={raduis}
            strokeWidth={strokeWidth}
            stroke="#F4338F"
            strokeDasharray={circumFerence}
          />
        </G>
      </SVG>
      <TouchableOpacity  onPress = {scrollTo} style={styles.button} activeOpacity={0.6}>
        <AntDesgin name="arrowright" size={32} color={'#FFF'} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    padding: 20,
    backgroundColor: '#f4388f',
    borderRadius: 100,
  },
});
