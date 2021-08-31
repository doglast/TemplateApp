import React from 'react';
import {ScrollView} from 'react-native';
import Header from '../../components/Header';
import Search from '../../components/Search';
import Card from '../../components/Card';
import Footer from '../../components/Footer';


const Home = ({ navigation }) =>{
  return(
    <ScrollView>
      <Header/>
      <Search/>
      <Card/>
      <Footer/>
    </ScrollView>
  );
};

export default Home;