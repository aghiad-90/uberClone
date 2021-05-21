import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView, ActivityIndicator} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import PlaceRow from '../../components/PlaceRow';
import {useNavigation , useRoute} from '@react-navigation/native'


const DistinationPage = () => {
  const [originPlace, setOriginPlace] = useState(null);
  const [Distination, setDistination] = useState(null);

  const {navigate} = useNavigation();

  useEffect(() => {
    if (originPlace && Distination) {
      // Loader()
      navigate('SearhResult' , {originPlace , Distination})

    }
  }, [originPlace, Distination]);

  const homePlace = {
    description: 'Home',
    geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
  };
  const workPlace = {
    description: 'Work',
    geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Where From .."
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
           
          }}
          query={{
            key: 'AIzaSyAyGIvMiuTDM5hWnLq3tAWH5x-USLzoHjE',
            language: 'en',
          }}
          fetchDetails
          styles={{
            textInput: styles.input,
            poweredContainer: styles.powerContainer,
            container: {position: 'relative', zIndex: 10},
            separator: styles.seperator
          }}
          renderRow = {(data)=> <PlaceRow data= {data}/>}
          currentLocation = {true}
          currentLocationLabel = 'Current Location'
          renderDescription = {data => data.description || data.vicinity}
          predefinedPlaces = {[homePlace , workPlace]}
        />

        <GooglePlacesAutocomplete
          placeholder="Where To.."
          onPress={(data, details = null) => {
            setDistination({data, details});
          }}
          query={{
            key: 'AIzaSyAyGIvMiuTDM5hWnLq3tAWH5x-USLzoHjE',
            language: 'en',
          }}
          fetchDetails
          styles={{
            textInput: styles.input,
            container: {position: 'relative', top: -300},
            poweredContainer: styles.powerContainer,
            separator : styles.seperator,
            
          }}
          renderRow = {(data)=> <PlaceRow data= {data}/>}
        />

        {/* Circle */}
          <View style = {styles.circle} />
        {/* Line */}
        <View style = {styles.line} />

        {/* Square */}

        <View style = {styles.square} />
      </View>
    </SafeAreaView>
  );
};

export default DistinationPage;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    height: '100%',
  },
  input: {
    backgroundColor: '#eee',
    height: 50,
    marginVertical: 5,
    padding: 10,
    marginLeft : 30,
  },
  search: {
    height: 300,
  },
  powerContainer : {
    display : 'none'
  },
  seperator : {
    height : 1,
    backgroundColor : 'grey'
  },
  circle : {
    width : 5,
    height : 5,
    borderRadius : 10,
    backgroundColor : 'black',
    position : 'absolute',
    top : 30,
    left : 15
  },
  line : {
    width : 1,
    height : 60,
    backgroundColor : 'grey',
    position : 'absolute',
    top : 40,
    left : 17
  }, 
  square : {
    width : 5,
    height : 5,
    backgroundColor : 'black',
    position : 'absolute',
    top : 110,
    left : 15
  }
});
