import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import Search from '../../components/Search';
import { windowHeight, windowWidth } from '../../utils/Dimensions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '@react-navigation/native';

const Contact = ({navigation}) =>{

  const {colors} = useTheme();
  const theme = useTheme();

  return(
      <View style={styles.container}>
        <StatusBar barStyle={theme.dark? 'light-content':'dark-content'}/>
        <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
          >
            <Icon 
              name="close-outline" 
              color="#fff"
              size={25}
            />
          </TouchableOpacity>      
        </View>       
      </View>
      <View style={{justifyContent:'center', alignItems:'center'}}>
        <Text style={[styles.titulo,{
          color: colors.text
        }]}>Entre em contato conosco</Text>
        <View style={styles.containerEndereco}>
          <Text style={styles.subtitulo}>Venha falar com a gente</Text>
          <Text style={styles.texto}>Endereço:</Text>
          <Text style={styles.texto}>Rua:   Número:   Bairro:   </Text>
          <Text style={styles.texto}>Cidade:    Estado:   </Text>
          <Text style={styles.texto}>CEP:</Text>
        </View>
        <View style={styles.containerContato}>
          <Text style={styles.subtitulo}>Formas de contato</Text>
          <Text style={styles.texto}>E-mail:</Text>
          <Text style={styles.texto}>Telefone: </Text>
        </View>
      </View>   
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  containerEndereco:{
    flexDirection:'column'
  },
  containerContato:{
    flexDirection:'column',
    marginBottom: windowHeight*0.37,
  },
  titulo:{
    color: '#000',
    fontSize: 28,
  },
  subtitulo:{
    marginTop: windowHeight*0.01,
    color: '#7f7f7f',
    fontSize: 22,
  },
  texto:{
    marginTop: windowHeight*0.01,
    color: '#7f7f7f',
    fontSize: 18,
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