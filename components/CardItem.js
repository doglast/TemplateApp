import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimensions';

const CardItem = ({item}) =>{
  return(
    <View style={{flex:1}}>
      <View style={styles.cardView}>
        <View style={styles.containerImagem}>
          <Image style={styles.imagem} source={{uri:item.url}}/>
        </View>
        <View style={styles.containerDescricao}>
          <Text style={styles.descricao}>{item.title}</Text>
        </View>
             
      </View>
    </View> 
  )
}

export default CardItem;

const styles = StyleSheet.create({
  cardView:{
    backgroundColor:"#fff",
    flexDirection: 'row',  
    margin:windowWidth * 0.03,
    borderRadius: windowWidth * 0.02,
    shadowColor: "#000",
    shadowOffset: {width:0.1, height:1},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 2,
    height: windowHeight*0.16,
    flexWrap:'wrap'
  },
  containerImagem:{
    width: windowWidth*0.3, 
    marginRight: 4
  },
  imagem:{
    width: windowWidth*0.3,
    height: windowHeight*0.15,
    borderRadius:windowWidth * 0.02,
    marginTop: windowHeight*0.005,
    marginLeft: windowWidth*0.005,
  },
  containerDescricao:{
    width: windowWidth*0.6
  },
  descricao:{
    marginTop: windowHeight*0.01,
    color: '#7f7f7f',
    fontSize: 18,
  },

});