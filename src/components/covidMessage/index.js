import React from 'react';
import {View, Text , StyleSheet} from 'react-native';

const CovidMessage = () => {
  return (
    <View style ={styles.wrapper}>
      <Text style ={styles.title}>Travel if Nacessary</Text>
      <Text style = {styles.text}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's.
      </Text>
      <Text  style = {styles.learn}>Learn More !</Text>
    </View>
  );
};

export default CovidMessage;

const styles = StyleSheet.create({
    wrapper :{
        backgroundColor: "#2b80ff",
        padding: 10,
        borderTopLeftRadius : 10,
        borderTopRightRadius : 10,
        paddingVertical : 20,
        color : 'white'
    },
    title : {
        fontWeight : 'bold',
        fontSize : 20,
        paddingBottom : 10,
        color : 'white'
    } ,
    text: {
        paddingBottom  :20,
        fontSize : 15,
        color : 'white'
    },
    learn : {
        color : '#fff',
        fontWeight : 'bold'
    }
})