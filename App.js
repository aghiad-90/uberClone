/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import RootNavigator from './src/Navigation/rootNavigator'
import Geolocation from '@react-native-community/geolocation';
navigator.geolocation = require('@react-native-community/geolocation');
import OnBording from './src/Screens/onBoarding'



import Amplify from 'aws-amplify';
import config from './src/aws-exports'
import OnBoarding from './src/Screens/onBoarding';
Amplify.configure(config)


const App = () => {

  useEffect(() => {
    Geolocation.requestAuthorization();
  },[])

  return (

      // <RootNavigator />
      <OnBoarding />
  );
};

export default App

