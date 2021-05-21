import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import RouteMap from '../../components/routeMap';
import UberTypes from '../../components/UberTypes';
import {useRoute} from '@react-navigation/native'



const SearchResult = () => {

  const route  = useRoute()
  const {originPlace, Distination} = route.params
  
  return (
    <View style={{flex: 1}}>
      <View style = {{height : Dimensions.get('window').height -400}}>
        <RouteMap  origin ={originPlace} destination = {Distination} />
      </View>
      {/* <UberTypes /> */}
      <View style = {{ height : 600 }}>
      <UberTypes />
      </View>
    </View>
  );
};

export default SearchResult;
