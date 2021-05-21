import React from 'react';
import {View, Image, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const UberTypesRow = ({}) => {
  return (
    <View style={styles.rowContainer}>
      <Image  source ={require('../../../')} style={styles.image} />

      <View style={styles.desc}>
        <Text style = {{fontWeight : 'bold'}}>Uber xcd</Text>
        <Text>some descri</Text>
      </View>

      <View>
        <Text style={styles.price}>456$</Text>
      </View>
    </View>
  );
};

export default UberTypesRow;

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
    height : 80,
    backgroundColor : '#eee',
    marginVertical  :10
  },
  image: {
    width: 30,
    height : 30,
    resizeMode : 'contain'
  },
  desc: {
    textAlign: 'left',
    flex: 1,
  },
});
