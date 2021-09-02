import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimensions';

const Footer =({navigation})=>{
  return(
    <View style={styles.container} >
      <View style={styles.footer}>
        <Text style={styles.text}>O Zine</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Contact')} >
          <Text style={styles.text}>Entre em contato</Text>
        </TouchableOpacity>
        
        <Text style={styles.text}>Anuncie aqui</Text> 
      </View>
    </View>
  );
}

export default Footer;

const styles = StyleSheet.create({
  container: {
    flex: 1 
  },
  footer: {

    height:windowHeight*0.05,
    width: windowWidth,
    backgroundColor:'#c23',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal: windowHeight*0.02,
    position: 'absolute',
    bottom:0
  },
  text: {
    fontSize: 16,
    color: '#f3f3f3',
  },
});