import React from 'react';
import {View, Text, StyleSheet ,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Materials from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native'


const HomeSearch = () => {
  const {navigate } = useNavigation()
  return (
    <View>
      <TouchableOpacity onPress = {() => navigate('Distination')} style={styles.input}>
        <Text style={styles.inputText}>Wehre To ?</Text>

        <View style={styles.timeContainer}>
          <Icon name="clockcircle" size={16} />
          <Text>Now</Text>
          <Materials name="keyboard-arrow-down" />
        </View>
      </TouchableOpacity>

      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <AntDesign name={'clockcircle'} size={20} color={'#ffffff'} />
        </View>
        <Text style={styles.destinationText}>Spin Nightclub</Text>
      </View>

      {/* Home destination */}
      <View style={styles.row}>
        <View style={[styles.iconContainer, {backgroundColor: '#218cff'}]}>
          <Entypo name={'home'} size={20} color={'#ffffff'} />
        </View>
        <Text style={styles.destinationText}>Spin Nightclub</Text>
      </View>
    </View>
  );
};

export default HomeSearch;

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'gray',
    opacity: 0.7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    margin: 10,
    alignItems: 'center',
  },
  inputText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
  timeContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    width: 100,
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#dbdbdb',
  },
  iconContainer: {
    backgroundColor: '#b3b3b3',
    padding: 10,
    borderRadius: 25,
  },
  destinationText: {
    marginLeft: 10,
    fontWeight: '500',
    fontSize: 16,
  },
});
