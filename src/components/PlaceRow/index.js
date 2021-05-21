import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const PlaceRow = ({data}) => {
  console.log(data);
  return (
    <View style={styles.container}>
      <View style={styles.IconContainer}>
        {data.description === 'Home' ? (
          <Icon name="home" size={20} color="white" />
        ) : (
          <Icon name="location-pin" size={20} color="white" />
        )}
      </View>

      <Text style={styles.desc}>{data.description || data.vicinity}</Text>
    </View>
  );
};

export default PlaceRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  IconContainer: {
    backgroundColor: 'grey',
    borderRadius: 50,
    marginRight: 10,
    padding: 5,
  },
  desc: {
    fontSize: 14,
  },
});
