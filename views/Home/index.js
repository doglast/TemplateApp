import React from 'react';
import {ScrollView, StatusBar} from 'react-native';
import Search from '../../components/Search';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import Carousel from '../../components/Carousel';
import { dummyData } from '../../data/Data';


const Home = ({ navigation }) =>{
  return(
    <ScrollView>
      <StatusBar backgroundColor='#303030' barStyle="light-content"/>
      <Search/>
      <Carousel data = {dummyData}/>
      <Card data ={dummyData}/>
    </ScrollView>
  );
};

export default Home;