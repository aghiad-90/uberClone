import React from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';

const OnBoarding = ({item}) => {
  const {width} = useWindowDimensions();
  return (
    <View style={[styles.container, {width}]}>
      <Image
        source={item.image}
        style={[styles.image, {width, resizeMode: 'contain'}]}
      />

      <View style={{flex: 0.3}}>
        <Text style={styles.title}>{item.title}</Text>

        <Text style={styles.desc}>{item.description}</Text>
      </View>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontWeight: '800',
    fontSize: 28,
    marginBottom: 10,
    color: '#493d8a',
    textAlign: 'center',
  },
  desc: {
    fontWeight: '300',
    color: '#62656b',
    paddingHorizontal: 64,
  },
  image :{
      flex : 0.7,
      justifyContent : 'center',
      width : 70,
      height : 70
  }
});
