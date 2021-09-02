import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import Search from '../../components/Search';
import Footer from '../../components/Footer';
import { windowHeight } from '../../utils/Dimensions';

const Contact = ({}) =>{
  return(
    <ScrollView style={styles.container}>
      <Search/>
      <View style={{justifyContent:'center', alignItems:'center'}}>
        <Text style={styles.titulo}>Entre em contato conosco</Text>
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
      <Footer/>
    </ScrollView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container:{
    
  },
  containerEndereco:{
    flexDirection:'column'
  },
  containerContato:{
    flexDirection:'column',
    marginBottom: windowHeight*0.37,
  },
  titulo:{
    marginTop: windowHeight*0.01,
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
  

});