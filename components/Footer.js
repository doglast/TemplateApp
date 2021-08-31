import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimensions';

const Footer =()=>{
  return(
    <View style={styles.container} >
      <View style={styles.footer}>
        <Text style={styles.text}>O Guia</Text>
        <Text style={styles.text}>Entre em contato</Text>
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
    marginTop:windowHeight*0.55,
    height:windowHeight*0.1,
    backgroundColor:'#c23',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal: windowHeight*0.02
  },
  text: {
    fontSize: 16,
    color: '#f3f3f3',
  },
});