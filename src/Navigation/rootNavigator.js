import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screens/HomeScreen';
import Distination from '../Screens/DistinationPage';
import SearchResult from '../Screens/SearchResult';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Distination" component={Distination} />
        <Stack.Screen name="SearhResult" component={SearchResult} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
