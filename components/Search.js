import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';

const texto = "texto"

const Search =()=>{
  return(
    <View style={styles.inputContainer} >
      <TextInput
        style={styles.input}
        placeholder="Pesquisar"
      />
      <View style={styles.iconStyle}>
          <AntDesign name={"filter"} size={25} color="#000"/>
      </View>
    </View>   
  );
}

export default Search;

const styles = StyleSheet.create({
  logo: {
    fontSize: 16,
    color: '#f3f3f3',
  },
  menu: {
    fontSize: 16,
    color: '#f3f3f3',
    left: windowWidth*0.7
  },
  inputContainer: {
    left: windowWidth*0.025,
    marginTop: 5,
    marginBottom: 10,
    width: '95%',
    height: windowHeight / 15,
    borderColor: '#ccc',
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  iconStyle: {
    padding: 10,
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftColor: '#000',
    borderLeftWidth: 1,
    width: '15%',
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
});