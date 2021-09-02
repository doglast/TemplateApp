import React from 'react';
import { FlatList } from 'react-native';
import CardItem from './CardItem';
import { windowHeight } from '../utils/Dimensions';

const Card = ({data}) =>{
  if(data && data.length){
    return(
      <FlatList style={{marginBottom:windowHeight*0.07}}
        data =  {data}
        keyExtractor = {(item, index) => 'key' + index}
        renderItem = {({item}) =>{
          return <CardItem item = {item}/>
        }}
      /> 
    )}
}

export default Card;

