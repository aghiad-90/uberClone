import React, {useEffect, useState} from 'react';
import {View, Text, Dimensions, Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Geolocation from '@react-native-community/geolocation';


const RouteMap = ({ origin, destination }) => {
  const [currentLocation , setCurrentLocation] = useState({})
 

console.log('origin' , origin.details.geometry.location.lat)

  const originLoc = {
    latitude: origin?.details.geometry.location.lat,
    longitude: origin?.details.geometry.location.lng,
  };

  const destinationLoc = {
    latitude: destination?.details.geometry.location.lat,
    longitude: destination?.details.geometry.location.lng,
  };

//   const success = (pos) => {
//     console.log(pos)
//     setCurrentLocation(pos.coords)
//   }

//   const error = (err) => {
//     console.log(err)
//   }


//     const getLocation =  () => {
//      Geolocation.getCurrentPosition( success , error)
//    };

//   useEffect(() => {
//     getLocation()
//   }, []);


  return (
    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={{height: 400}}
      showsUserLocation
      zoomControlEnabled={true}
      zoomEnabled
      zoomTapEnabled
      region={{
        latitude: originLoc.latitude,
        longitude: originLoc.longitude,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
    
    <MapViewDirections
        origin={originLoc}
        destination={destinationLoc}
        apikey={"AIzaSyAyGIvMiuTDM5hWnLq3tAWH5x-USLzoHjE"}
        strokeWidth={5}
        strokeColor="black"
      />
      <Marker
        coordinate={originLoc}
        title={'Origin'}
      />
      <Marker
        coordinate={destinationLoc}
        title={"Destination"}
      />
    </MapView>
  );
};

export default RouteMap;
