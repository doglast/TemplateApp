import React from 'react';
import {ScrollView, SafeAreaView} from 'react-native';
import Search from '../../components/Search';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import Carousel from '../../components/Carousel';
import { dummyData } from '../../data/Data';


const Home = ({ navigation }) =>{
  return(
    <ScrollView>
      <Search/>
      <Carousel data = {dummyData}/>
      <Card data ={dummyData}/>
    </ScrollView>
  );
};

export default Home;