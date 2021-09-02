import React from 'react';
import {ScrollView} from 'react-native';
import Search from '../../components/Search';
import Card from '../../components/Card';

import Carousel from '../../components/Carousel';
import { dummyData } from '../../data/Data';


const Promo = ({ navigation }) =>{
  return(
    <ScrollView>
      <Search/>
      <Card data ={dummyData}/>
    </ScrollView>
  );
};

export default Promo;