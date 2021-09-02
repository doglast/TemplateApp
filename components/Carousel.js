import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Animated } from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimensions';
import CarouselItem from './CarouselItem';


const Carousel = ({data}) =>{
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, windowWidth);

  if(data && data.length){
    return(
      <View >
        <FlatList 
          data = {data}
          keyExtractor = {(item, index) => 'key' + index}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment = 'center'
          scrollEventThrottle = {16}
          decelerationRate = {'fast'}
          showsHorizontalScrollIndicator = {false}
          renderItem = {({item}) => {
            return <CarouselItem item = {item}/>
          }}
          onScroll = {Animated.event(
            [{nativeEvent:{contentOffset:{x: scrollX}}}]
          )}
        />
        <View style={styles.dotView} > 
          {data.map((_, i) =>{
            let opacity = position.interpolate({
              inputRange:[i-1, i, i+1],
              outputRange:[0.3, 1, 0.3],
              extrapolate:'clamp'
            })
              return(
                <Animated.View 
                  key={i}
                  style={styles.animatedView}                  
                />
              )
            })}
        </View>
      </View> 
    )
  }

return null;
}

export default Carousel;

const styles = StyleSheet.create({
  dotView:{
    flexDirection:'row',
    justifyContent:'center',
  },
  animatedView:{
    opacity:0.5, 
    height:10, 
    width:10, 
    backgroundColor:'#595959',
    margin: 8, 
    borderRadius: 5
  }
})