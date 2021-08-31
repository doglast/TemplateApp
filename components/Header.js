import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimensions';

const Header =()=>{
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>LOGO</Text>
        <Text style={styles.menu}>MENU H</Text>      
      </View>       
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    marginTop:windowHeight*0.03,
    height:windowHeight*0.06,
    backgroundColor:'#c23',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal: windowWidth*0.03,
    paddingTop:10,
  },
  logo: {
    fontSize: 16,
    color: '#f3f3f3',
  },
  menu: {
    fontSize: 16,
    color: '#f3f3f3',
  },
});