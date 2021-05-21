import React from 'react';
import {View} from 'react-native'
import CovidMessage from '../../components/covidMessage'
import HomeMap from '../../components/HomeMap';
import HomeSearch from '../../components/HomeSearch'

const Home = () => {
    return(
        <View>
            <HomeMap />
            <CovidMessage />
            <HomeSearch />
        </View>
    )
}


export default Home;

