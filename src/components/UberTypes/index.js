import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import UberTypesRow from '../UberTypesRow';

const UberTypes = () => {
  return (
    <View style={{justifyContent: 'center'}}>
      <Text>Uber Types</Text>
      <UberTypesRow />
      <UberTypesRow />
      <UberTypesRow />

      <TouchableOpacity
        style={{
          backgroundColor: 'black',
          margin: 10,
          alignItems: 'center',
          padding: 10,
        }}>
        <Text style={{color: 'white'}}>Confirm your Order</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UberTypes;
