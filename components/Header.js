import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimensions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header =({navigation})=>{
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.popToTop()}
        >
          <Icon 
            name="close-outline" 
            color="#fff"
            size={25}
          />
        </TouchableOpacity>      
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