import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimensions';

const CarouselItem = ({item}) =>{
  return(
    <View style={styles.container}>
      <Image style={styles.imagem} source={{uri:item.url}}/>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{item.title}</Text>
      </View>
    </View> 
  )
}

export default CarouselItem;

const styles = StyleSheet.create({
  container: {
    flex: 1 ,
    width: windowWidth -20,
    height: windowHeight/3,
    backgroundColor: '#fff',
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {width:0.5, height:5},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    borderRadius: 3

  },
  imagem:{
    width: windowWidth -20,
    height: windowHeight/3,
    borderRadius: 10,
  },
  textContainer:{
    position: 'absolute',
    bottom: 10,
    margin: 5,
    left: 5,
  },
  text:{
    fontSize: 22,
    color: '#000',
    shadowColor:'#000',
    shadowOffset: {width:0.5, height:5},
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
    marginBottom: 5,
    fontWeight:'bold'
  },
});