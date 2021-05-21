import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, FlatList, Animated} from 'react-native';
import slides from './slides';
import Item from './item';
import Paginator from './Paginator'
import NextButton from './NextButton'

const OnBoarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  React.useEffect(() => {
    console.log('Current Imdex ', currentIndex);
  }, [currentIndex]);

  const viewableItemChanged = useRef(({viewableItems}) => {
    console.log(viewableItems[0].index);
    setCurrentIndex(viewableItems[0].index);
  }).current;

  // update the state only when the slide in the 50 % of the Screen

  const viewconfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const scrollX = useRef(new Animated.Value(0)).current;

  const slideRef = useRef(null);

  const scrollTo = () => {
      if(currentIndex < slides.length -1) {
          slideRef.current.scrollToIndex({index : currentIndex  + 1})
      } else {
          console.log('last Item')
      }
  }

  return (
    <View style={styles.container}>
      <View style = {{flex : 3}}>
        <FlatList
          keyExtractor={data => data.id}
          data={slides}
          renderItem={({item}) => <Item item={item} />}
          horizontal
          showsHorizontalScrollIndicator = {false}
          pagingEnabled
          bounces={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          onViewableItemsChanged={viewableItemChanged}
          viewabilityConfig={viewconfig}
          scrollEventThrottle={32}
          ref={slideRef}
          
        />
      </View>
      <Paginator  data = {slides} scrollX = {scrollX}/>
      <NextButton percentage = {(currentIndex  + 1) * (100 / slides.length)} scrollTo = {scrollTo} />
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
